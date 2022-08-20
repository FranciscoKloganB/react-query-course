module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["node_modules"],
  plugins: ["no-only-tests"],
  rules: {
    curly: "error",
    quotes: ["error", "double", {
      avoidEscape: false, allowTemplateLiterals: true
    }],
    "max-len": [
      "error",
      {
        code: 100,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    "no-only-tests/no-only-tests": "error",
    "react/react-in-jsx-scope": "off"
  }
}
