// themes/types.ts
// Semantic token mapping system for Tree-sitter syntax highlighting

export interface ThemePalette {
  // Base colors
  blue: string;
  cyan: string;
  green: string;
  orange: string;
  purple: string;
  red: string;
  yellow: string;
  // Neutral
  gray: string;
  darkGray: string;
  white: string;
}

export interface SyntaxTokens {
  // Variables
  variable: string;
  parameter: string;
  member: string;
  
  // Functions
  function: string;
  method: string;
  builtin: string;
  
  // Types
  type: string;
  
  // Constants & Literals
  constant: string;
  numeric: string;
  boolean: string;
  string: string;
  escape: string;
  
  // Comments
  comment: string;
  
  // Keywords
  keyword: string;
  
  // Markup (Markdown/HTML)
  heading: string;
  link: string;
  raw: string;
  list: string;
  quote: string;
  
  // Punctuation
  delimiter: string;
  bracket: string;
  
  // Operators
  operator: string;
  
  // Labels
  label: string;
}

export interface Theme {
  name: string;
  palette: ThemePalette;
  syntax: SyntaxTokens;
}

// Map a semantic token to a palette color
export function resolveColor(theme: Theme, token: keyof SyntaxTokens): string {
  const colorKey = theme.syntax[token];
  return theme.palette[colorKey as keyof ThemePalette];
}
