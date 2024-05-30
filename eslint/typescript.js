/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["*.ts?(x)"],
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
        "prettier",
        require.resolve("./rules/typescript"),
        require.resolve("./rules/typescript/extension"),
        require.resolve("./rules/typescript/import"),
      ],
    },
  ],
};
