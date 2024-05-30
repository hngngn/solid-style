/**
 * These are enabled by `react/recommended`, but we're using solidjs so
 * we'll disable some of them that not work or fit in solidjs design
 */
const disalbedRules = {
  "react/display-name": "off",
  "react/jsx-fragments": "off",
  "react/jsx-key": "off",
  "react/jsx-no-duplicate-props": "off",
  "react/no-array-index-key": "off",
  "react/no-danger-with-children": "off",
  "react/no-deprecated": "off",
  "react/no-direct-mutation-state": "off",
  "react/no-find-dom-node": "off",
  "react/no-is-mounted": "off",
  "react/no-render-return-value": "off",
  "react/no-unknown-property": "off",
  "react/no-unstable-nested-components": "off",
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "react/require-render-return": "off",
};

module.exports = {
  rules: {
    ...disalbedRules,
    /**
     * Require an explicit type when using button elements.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    "react/button-has-type": "warn",
    /**
     * Require consistent function type for function components.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
     */
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    /**
     * Require consistent boolean attributes notation in JSX.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    "react/jsx-boolean-value": "warn",
    /**
     * Disallow unnecessary curly braces in JSX props and children.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    "react/jsx-curly-brace-presence": "warn",
    /**
     * Prevent problematic leaked values from being rendered.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
     */
    "react/jsx-no-leaked-render": "warn",
    /**
     * Prevents usage of unsafe `target='_blank'`.
     *
     * This rule is a part of `react/recommended`, but we've modified it to
     * allow referrer.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    "react/jsx-no-target-blank": [
      "error",
      {
        allowReferrer: true,
      },
    ],
    /**
     * Disallow empty React fragments.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
    /**
     * Require the use of PascalCase for user-defined JSX components.
     *
     * 🚫 Not fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    "react/jsx-pascal-case": "warn",
    /**
     * Disallow closing tags for components without children.
     *
     * 🔧 Fixable - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    "react/self-closing-comp": "warn",
  },
};
