import { defineConfig } from 'i18next-cli';

export default defineConfig({
  "locales": [
    "en",
    "de",
    "es",
    "fr",
    "it",
    "ja",
    "ko",
    "pt",
    "zh",
    "pl",
    "hu",
    "tr"
  ],
  "extract": {
    "input": [
      "pages/**/*.tsx",
      "components/**/*.tsx"
    ],
    "output": "public/locales/{{language}}/translations.json",
    "defaultNS": "translations",
    "keySeparator": ".",
    "nsSeparator": false,
    "functions": [
      "t",
      "*.t"
    ],
    "transComponents": [
      "Trans"
    ]
  },
  "types": {
    "input": [
      "public/locales/{{language}}/{{namespace}}.json"
    ],
    "output": "types/i18next.d.ts"
  }
});