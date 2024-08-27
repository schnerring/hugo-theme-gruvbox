import globals from "globals";
import js from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: [
      "assets/js/flexsearch.js",
      "assets/js/prism.js",
      "public/",
      "resources/",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  js.configs.recommended,
  prettierRecommended,
];
