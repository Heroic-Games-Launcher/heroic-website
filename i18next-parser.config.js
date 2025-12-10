module.exports = {
  locales: ['en'],
  output: 'public/locales/$LOCALE/translations.json',
  input: ['pages/**/*.tsx', 'components/**/*.tsx'],
  sort: true,
  createOldCatalogs: false,
  keySeparator: '.',
  namespaceSeparator: false,
  defaultNamespace: 'translations',
  defaultValue: (locale, namespace, key) => key,
  useKeysAsDefaultValue: true,
  verbose: true
}
