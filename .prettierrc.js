module.exports = {
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/(.*)$", "", "^[./]", "^[../]", ""],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require("prettier-plugin-tailwindcss")],
  printWidth: 80,
  semi: false,
  singleQuote: false,
  trailingComma: "none"
}
