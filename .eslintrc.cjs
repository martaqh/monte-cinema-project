/* eslint-env node */

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "eslint:recommended",
    "prettier",
    "plugin:vue/essential"
  ],
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
  }
}
