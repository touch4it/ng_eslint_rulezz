module.exports = {
  root: true,
  ignorePatterns: [
    "projects/**/*",
    "node_modules/**/*",
  ],
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
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended",
      ],
      rules: {
        "jsdoc/newline-after-description": "off",
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
            pathGroups: [{ "pattern": "~/**", "group": "internal" }],
            groups: ["builtin", "external", "internal", "parent", "sibling"],
            "newlines-between": "always",
          },
        ],
        "@typescript-eslint/no-unused-vars": ["off"],
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
        ]
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
