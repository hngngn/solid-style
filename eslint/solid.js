/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ["solid"],
  extends: [
    "plugin:solid/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    require.resolve("./rules/jsx-a11y"),
    require.resolve("./rules/solid"),
  ],
  overrides: [
    {
      files: [
        "src/{app,entry-server}.tsx",
        "src/routes/**/*.tsx",
        "!src/routes/api/**/*.ts",
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "import-x/no-default-export": "off",
      },
    },
    {
      files: ["src/routes/api/**/*.ts"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      files: ["src/entry-client.tsx"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
};
