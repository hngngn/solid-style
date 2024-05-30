// See: https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "prettier",
    require.resolve("./rules/best-practice"),
    require.resolve("./rules/es6"),
    require.resolve("./rules/import"),
    require.resolve("./rules/possible-errors"),
    require.resolve("./rules/stylistic"),
    require.resolve("./rules/unicorn"),
    require.resolve("./rules/variables"),
  ],
  env: {
    es2021: true,
  },
  reportUnusedDisableDirectives: true,
  settings: {
    "import/resolver": { node: {} },
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
};
