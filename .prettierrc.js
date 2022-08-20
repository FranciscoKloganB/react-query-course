module.exports = {
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/(.*)$", "", "^[./]", "^[../]", ""],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxBracketSameLine: false,
  plugins: [require("prettier-plugin-tailwindcss")],
  printWidth: 100,
  semi: false,
  singleQuote: false,
  trailingComma: "none"
}
