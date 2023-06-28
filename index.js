module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
        ecmaVersion: "latest"
      },
      extends: [
        "eslint:recommended",
        "plugin:@angular-eslint/recommended",
        "./legacy/ng-cli-compat-legacy.json",
        "./legacy/ng-cli-compat--formatting-add-on-legacy.json",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended",
      ],
      rules: {
        "jsdoc/newline-after-description": "off",
        "no-unused-vars": "off",
        "array-element-newline": [
          "error",
          {
            ArrayExpression: "consistent",
            ArrayPattern: {
              minItems: 3,
            },
          },
        ],
        semi: "error",
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "no-underscore-dangle": "off",
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "internal", "parent", "sibling"],
            "newlines-between": "always",
          },
        ],
      },
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:prettier/recommended",
      ],
      excludedFiles: ["*inline-template-*.component.html"],
      rules: {},
    },
  ],
};
