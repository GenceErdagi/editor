// themes/syntax-styles.ts
// Factory for creating SyntaxStyle instances from themes

import { SyntaxStyle, RGBA } from "@opentui/core";
import type { Theme } from "./types";
import { resolveColor } from "./types";

export interface LanguageSyntaxStyles {
  json: SyntaxStyle;
  markdown: SyntaxStyle;
  typescript: SyntaxStyle;
  python: SyntaxStyle;
  rust: SyntaxStyle;
  go: SyntaxStyle;
  zig: SyntaxStyle;
}

export function createSyntaxStyles(theme: Theme): LanguageSyntaxStyles {
  const r = (token: Parameters<typeof resolveColor>[1]) => 
    RGBA.fromHex(resolveColor(theme, token));

  return {
    // JSON - Using Helix capture names
    json: SyntaxStyle.fromStyles({
      string: { fg: r("string") },
      "variable.member": { fg: r("member") },  // object keys
      "constant.numeric": { fg: r("numeric") },
      "constant.builtin": { fg: r("boolean") },  // true/false/null
      "comment": { fg: r("comment") },
      "punctuation.delimiter": { fg: r("delimiter") },
      "punctuation.bracket": { fg: r("bracket") },
      default: { fg: r("variable") },
    }),

    // Markdown - Using Helix capture names
    markdown: SyntaxStyle.fromStyles({
      "markup.heading": { fg: r("heading"), bold: true },
      "markup.heading.1": { fg: r("heading"), bold: true, underline: true },
      "markup.heading.2": { fg: r("heading"), bold: true },
      "markup.heading.3": { fg: r("heading"), bold: true },
      "markup.heading.4": { fg: r("heading"), bold: true },
      "markup.heading.5": { fg: r("heading"), bold: true },
      "markup.heading.6": { fg: r("heading"), bold: true },
      "markup.heading.marker": { fg: r("heading") },
      "markup.link": { fg: r("link"), underline: true },
      "markup.link.label": { fg: r("link") },
      "markup.link.url": { fg: r("link"), underline: true },
      "markup.raw": { fg: r("raw") },
      "markup.raw.block": { fg: r("raw") },
      "markup.list": { fg: r("list") },
      "markup.list.unnumbered": { fg: r("list") },
      "markup.list.numbered": { fg: r("list") },
      "markup.quote": { fg: r("quote"), italic: true },
      "markup.bold": { fg: r("variable"), bold: true },
      "markup.italic": { fg: r("variable"), italic: true },
      label: { fg: r("label"), italic: true },  // code block language
      "punctuation.special": { fg: r("delimiter") },
      "punctuation.bracket": { fg: r("bracket") },
      default: { fg: r("variable") },
    }),

    // TypeScript/JavaScript - Using Helix capture names
    typescript: SyntaxStyle.fromStyles({
      variable: { fg: r("variable") },
      "variable.parameter": { fg: r("parameter") },
      "variable.member": { fg: r("member") },
      function: { fg: r("function") },
      "function.method": { fg: r("method") },
      "function.call": { fg: r("function") },
      "function.builtin": { fg: r("builtin") },
      type: { fg: r("type") },
      "type.builtin": { fg: r("builtin") },
      constant: { fg: r("constant") },
      "constant.numeric": { fg: r("numeric") },
      "constant.builtin": { fg: r("boolean") },
      "constant.character.escape": { fg: r("escape") },
      string: { fg: r("string") },
      comment: { fg: r("comment"), italic: true },
      keyword: { fg: r("keyword") },
      "keyword.import": { fg: r("keyword") },
      "keyword.operator": { fg: r("operator") },
      operator: { fg: r("operator") },
      "punctuation.delimiter": { fg: r("delimiter") },
      "punctuation.bracket": { fg: r("bracket") },
      default: { fg: r("variable") },
    }),

    // Python - Using Helix capture names
    python: SyntaxStyle.fromStyles({
      variable: { fg: r("variable") },
      "variable.parameter": { fg: r("parameter") },
      "variable.member": { fg: r("member") },
      function: { fg: r("function") },
      "function.method": { fg: r("method") },
      "function.builtin": { fg: r("builtin") },
      type: { fg: r("type") },
      "type.builtin": { fg: r("builtin") },
      constant: { fg: r("constant") },
      "constant.numeric": { fg: r("numeric") },
      "constant.builtin": { fg: r("boolean") },
      string: { fg: r("string") },
      comment: { fg: r("comment"), italic: true },
      keyword: { fg: r("keyword") },
      operator: { fg: r("operator") },
      "punctuation.delimiter": { fg: r("delimiter") },
      "punctuation.bracket": { fg: r("bracket") },
      default: { fg: r("variable") },
    }),

    // Rust - Using Helix capture names
    rust: SyntaxStyle.fromStyles({
      variable: { fg: r("variable") },
      "variable.parameter": { fg: r("parameter") },
      "variable.member": { fg: r("member") },
      function: { fg: r("function") },
      "function.method": { fg: r("method") },
      "function.macro": { fg: r("builtin") },
      type: { fg: r("type") },
      "type.builtin": { fg: r("builtin") },
      constant: { fg: r("constant") },
      "constant.numeric": { fg: r("numeric") },
      "constant.builtin": { fg: r("boolean") },
      string: { fg: r("string") },
      "constant.character.escape": { fg: r("escape") },
      comment: { fg: r("comment"), italic: true },
      keyword: { fg: r("keyword") },
      operator: { fg: r("operator") },
      "punctuation.delimiter": { fg: r("delimiter") },
      "punctuation.bracket": { fg: r("bracket") },
      label: { fg: r("label") },
      default: { fg: r("variable") },
    }),

    // Go - Using Helix capture names
    go: SyntaxStyle.fromStyles({
      variable: { fg: r("variable") },
      "variable.parameter": { fg: r("parameter") },
      "variable.member": { fg: r("member") },
      function: { fg: r("function") },
      "function.method": { fg: r("method") },
      "function.builtin": { fg: r("builtin") },
      type: { fg: r("type") },
      "type.builtin": { fg: r("builtin") },
      constant: { fg: r("constant") },
      "constant.numeric": { fg: r("numeric") },
      string: { fg: r("string") },
      "constant.character.escape": { fg: r("escape") },
      comment: { fg: r("comment"), italic: true },
      keyword: { fg: r("keyword") },
      operator: { fg: r("operator") },
      "punctuation.delimiter": { fg: r("delimiter") },
      "punctuation.bracket": { fg: r("bracket") },
      label: { fg: r("label") },
      default: { fg: r("variable") },
    }),

    // Zig - Using Helix capture names
    zig: SyntaxStyle.fromStyles({
      variable: { fg: r("variable") },
      "variable.parameter": { fg: r("parameter") },
      "variable.member": { fg: r("member") },
      function: { fg: r("function") },
      "function.macro": { fg: r("builtin") },
      type: { fg: r("type") },
      "type.builtin": { fg: r("builtin") },
      constant: { fg: r("constant") },
      "constant.numeric": { fg: r("numeric") },
      "constant.builtin": { fg: r("boolean") },
      string: { fg: r("string") },
      comment: { fg: r("comment"), italic: true },
      keyword: { fg: r("keyword") },
      operator: { fg: r("operator") },
      "punctuation.delimiter": { fg: r("delimiter") },
      "punctuation.bracket": { fg: r("bracket") },
      default: { fg: r("variable") },
    }),
  };
}
