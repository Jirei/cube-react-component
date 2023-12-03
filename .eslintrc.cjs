module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:playwright/recommended",
    //"plugin:jest-dom/recommended",
    //"plugin:testing-library/react",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "tailwind.config.js",
    "postcss.config.js",
    "playwright.config.ts",
    "playwright-ct.config.ts",
    "playwright",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "eslint-plugin-tsdoc",
    //"jest-dom",
    //"testing-library",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { destructuredArrayIgnorePattern: "^_" },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "tsdoc/syntax": "warn",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
