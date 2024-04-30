const globals = require("globals");
const { recommended: jsRecommended } = require("@eslint/eslint-plugin");
const { recommended: tsRecommended } = require("eslint-plugin-typescript");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // Your custom rules here
  },
  overrides: [
    {
      files: ["tests/**/*.ts"],
      env: { node: true, jest: true },
    },
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      rules: { "@typescript-eslint/no-unsafe-assignment": "off" },
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
    },
    {
      files: ["*.js"],
      rules: jsRecommended.rules,
    },
    {
      files: ["*.ts"],
      rules: tsRecommended.rules,
    },
  ],
  settings: {
    js: {
      globals: globals.browser,
    },
    node: {
      globals: globals.node,
    },
  },
};
