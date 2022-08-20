// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ["node_modules"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["no-only-tests"],
  rules: {
    curly: "error",
    quotes: [
      "error",
      "double",
      {
        avoidEscape: false,
        allowTemplateLiterals: true
      }
    ],
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
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use default to "Fragment"
      version: "detect" // React version. "detect" automatically picks the version you have installed.
    }
  }
}
