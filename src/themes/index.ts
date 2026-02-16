// themes/index.ts
// Theme system entry point

export { type Theme, type ThemePalette, type SyntaxTokens, resolveColor } from "./types";
export { githubDark } from "./github-dark";
export { parserRegistry, type ParserConfig } from "./parsers";
export { createSyntaxStyles, type LanguageSyntaxStyles } from "./syntax-styles";
