module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "./.eslintrc-auto-import.json",
    "plugin:vue/base",
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["vue", "@typescript-eslint", "vue3-jsx", "prettier"],
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  globals: {
    $apis: true,
    $alert: true,
    $utils: true,
    $datas: true,
    $store: true,
    $message: true,
    $notification: true,
    $dialog: true,
    $loadingBar: true,
    $router: true,
    defineModels: true,
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": [2],
    "@typescript-eslint/no-explicit-any": "off",
    "no-prototype-builtins": "off",
  },
};
