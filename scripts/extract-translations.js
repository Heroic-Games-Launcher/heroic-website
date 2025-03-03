const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// Configuration
const SOURCE_DIR = './';
const OUTPUT_DIR = './public/locales';
const DEFAULT_LOCALE = 'en';
const SUPPORTED_LOCALES = ['en', 'de', 'fr', 'es', 'pt', 'it', 'ru'];
const NAMESPACES = ['common'];

// Function to parse and extract translation keys from files
function extractTranslationsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const keys = [];
  
  try {
    // Parse the content
    const ast = parse(content, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    });
    
    // Find all t() function calls and extract keys
    traverse(ast, {
      CallExpression(path) {
        if (path.node.callee.name === 't') {
          const args = path.node.arguments;
          
          if (args[0] && args[0].type === 'StringLiteral') {
            keys.push(args[0].value);
          }
        }
      },
      JSXAttribute(path) {
        if ((path.node.name.name === 'i18nKey' || path.node.name.name === 'i18nkey') && 
            path.node.value && 
            path.node.value.type === 'StringLiteral') {
          keys.push(path.node.value.value);
        }
      }
    });
  } catch (error) {
    console.error(`Error parsing file ${filePath}:`, error);
  }
  
  return keys;
}

// Create a nested structure from flat keys
function createNestedStructure(flatKeys) {
  const result = {};
  
  flatKeys.forEach(key => {
    const parts = key.split('.');
    let current = result;
    
    parts.forEach((part, i) => {
      if (i === parts.length - 1) {
        // Last part, set the value
        current[part] = current[part] || part;
      } else {
        // Not the last part, create nested object if needed
        current[part] = current[part] || {};
        current = current[part];
      }
    });
  });
  
  return result;
}

// Merge new keys with existing translation
function mergeTranslations(existingTranslations, newStructure) {
  const result = { ...existingTranslations };
  
  function merge(target, source) {
    Object.keys(source).forEach(key => {
      if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (!target[key] || typeof target[key] !== 'object') {
          target[key] = {};
        }
        merge(target[key], source[key]);
      } else if (!target[key]) {
        // Only add if the key doesn't exist
        target[key] = source[key];
      }
    });
  }
  
  merge(result, newStructure);
  return result;
}

// Main function
async function extractTranslations() {
  console.log('Starting translation extraction...');
  
  // Create output directories if they don't exist
  SUPPORTED_LOCALES.forEach(locale => {
    const localeDir = path.join(OUTPUT_DIR, locale);
    if (!fs.existsSync(localeDir)) {
      fs.mkdirSync(localeDir, { recursive: true });
    }
  });
  
  // Process each namespace
  for (const namespace of NAMESPACES) {
    console.log(`Processing namespace: ${namespace}`);
    const allKeys = [];
    
    // Find TypeScript and TSX files
    const files = glob.sync(`${SOURCE_DIR}/{pages,components}/**/*.{ts,tsx}`, { ignore: 'node_modules/**' });
    
    // Extract keys from each file
    files.forEach(file => {
      const keys = extractTranslationsFromFile(file);
      allKeys.push(...keys);
    });
    
    // Remove duplicates
    const uniqueKeys = [...new Set(allKeys)];
    console.log(`Found ${uniqueKeys.length} unique translation keys`);
    
    // Create nested structure
    const nestedStructure = createNestedStructure(uniqueKeys);
    
    // For each locale, merge with existing translations or create new file
    for (const locale of SUPPORTED_LOCALES) {
      const outputFile = path.join(OUTPUT_DIR, locale, `${namespace}.json`);
      let existingTranslations = {};
      
      // Read existing translations if the file exists
      if (fs.existsSync(outputFile)) {
        try {
          existingTranslations = JSON.parse(fs.readFileSync(outputFile, 'utf-8'));
        } catch (error) {
          console.error(`Error reading ${outputFile}:`, error);
        }
      }
      
      // Merge existing translations with new keys
      const mergedTranslations = mergeTranslations(existingTranslations, nestedStructure);
      
      // Write back to file
      fs.writeFileSync(
        outputFile,
        JSON.stringify(mergedTranslations, null, 2),
        'utf-8'
      );
      
      console.log(`Updated ${locale}/${namespace}.json`);
    }
  }
  
  console.log('Translation extraction completed!');
}

// Run the extraction
extractTranslations().catch(console.error);