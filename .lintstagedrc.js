module.exports = {
  "*.{js,jsx,ts,tsx,css,sass,scss,md,json}": [
    'eslint --fix',
    'prettier --write "./**/*.{js,jsx,ts,tsx,css,sass,scss,md,json}" --config ./.prettierrc.js'
  ]
}
