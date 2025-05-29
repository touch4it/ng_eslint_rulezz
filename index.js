import eslint from '@eslint/js';
import angular from 'angular-eslint';
import jsdoc from 'eslint-plugin-jsdoc';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import tsEslint from 'typescript-eslint';

export default tsEslint.config([
  {
    ignores: [
      ".cache/",
      ".git/",
      ".github/",
      "node_modules/",
      "dist/",
      ".angular/",
    ],
  },
  jsdoc.configs['flat/recommended'],
  prettierPluginRecommended,
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'import/order': 'off',
      'trailing-comma': 'off',
      curly: ["error", "all"],
      "no-unused-vars": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      '@typescript-eslint/member-ordering': ['error'],
      '@typescript-eslint/naming-convention': 0,
      '@typescript-eslint/no-inferrable-types': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
    },
  },
  {
    files: ['*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    rules: {
    },
  },
]);
