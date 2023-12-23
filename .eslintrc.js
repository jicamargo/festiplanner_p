module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended",
  ],
  parser: "@typescript/eslint-parser",
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript/eslint-parser",
    requireConfigFile: false,
    sourceType: "module",
  },
  rules: {},
  globals: {
    require: true,
    Stimulus: true,
    process: true,
    module: true,
  },
};
