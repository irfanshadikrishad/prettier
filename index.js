/**
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  printWidth: 80,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  useTabs: false, // uses space instead of tabs (fixes the github indent issue)
  quoteProps: "consistent",
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
  plugins: ["prettier-plugin-organize-imports"],
  organizeImportsSkipDestructiveCodeActions: false,
};

export default config;
