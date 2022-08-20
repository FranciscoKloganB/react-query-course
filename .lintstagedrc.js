module.exports = {
  "*.{js,jsx}": [
    "eslint src --fix --config ./.eslintrc.js",
    "prettier --write './**/*.{js,jsx}' --config ./.prettierrc.js"
  ],
  "*.{css,sass,scss,md,json}": [
    "prettier --write './**/*.{css,sass,scss,md,json}' --config ./.prettierrc.js"
  ]
}
