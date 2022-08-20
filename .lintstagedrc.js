module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint src --fix --config ./.eslintrc.js",
    "prettier --write './**/*.{js,jsx,ts,tsx}' --config ./.prettierrc.js"
  ],
  "*.{css,sass,scss,md,json}": [
    "prettier --write './**/*.{css,sass,scss,md,json}' --config ./.prettierrc.js"
  ]
}
