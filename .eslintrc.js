// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["node_modules"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: [
    "no-only-tests",
    "unused-imports",
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
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
    "@typescript-eslint/no-unused-vars": "off",
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    "no-only-tests/no-only-tests": "error",
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "error"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    },
    react: {
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use default to "Fragment"
      version: "detect" // React version. "detect" automatically picks the version you have installed.
    }
  }
}
