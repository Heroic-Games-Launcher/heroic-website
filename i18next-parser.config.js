module.exports = {
  locales: ['en'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['pages/**/*.tsx', 'components/**/*.tsx'],
  sort: true,
  createOldCatalogs: false,
  keySeparator: '.',
  namespaceSeparator: ':',
  defaultNamespace: 'common',
  defaultValue: (locale, namespace, key) => key,
  useKeysAsDefaultValue: true,
  verbose: true
}
