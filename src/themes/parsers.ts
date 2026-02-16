// themes/parsers.ts
// Tree-sitter parser configurations using Helix queries

export interface ParserConfig {
  filetype: string;
  wasm: string;
  queries: {
    highlights: string[];
  };
}

// Helix query sources
const HELIX_QUERIES_BASE =
  "https://raw.githubusercontent.com/helix-editor/helix/master/runtime/queries";

export const parserRegistry: ParserConfig[] = [
  {
    filetype: "markdown",
    wasm: "https://github.com/tree-sitter-grammars/tree-sitter-markdown/releases/download/v0.3.2/tree-sitter-markdown.wasm",
    queries: {
      highlights: [`${HELIX_QUERIES_BASE}/markdown/highlights.scm`],
    },
  },
];
