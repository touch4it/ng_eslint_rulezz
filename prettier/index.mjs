export default {
    semi: true,
    trailingComma: 'es5',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 2,
    endOfLine: 'auto',
    bracketSpacing: true,
    trailingComma: 'all',
    plugins: [require.resolve('prettier-plugin-packagejson')],
    overrides: [
      {
        files: ['*.css', '*.scss', '*.sass'],
        options: {
          singleQuote: false,
        },
      },
      {
        files: ['*.js', '*.mjs', '*.cjs'],
        options: {
          singleQuote: true,
        },
      },
      {
        files: ['*.html'],
        options: {
          printWidth: 120,
        },
      },
    ],
  };
  