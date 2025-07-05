/**
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  useTabs: true,
  quoteProps: "consistent",
  jsxSingleQuote: false,
  bracketSpacing: true,
  objectWrap: "preserve",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  bracketSameLine: false,
  arrowParens: "always",
  requirePragma: false,
  insertPragma: false,
  checkIgnorePragma: false,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
  vueIndentScriptAndStyle: true,
  plugins: [],
};

export default config;
