// themes/github-dark.ts
import type { Theme } from "./types";

export const githubDark: Theme = {
  name: "github-dark",
  palette: {
    blue: "#79C0FF",
    cyan: "#56D4DD",
    green: "#7EE787",
    orange: "#FFA657",
    purple: "#D2A8FF",
    red: "#FF7B72",
    yellow: "#FFD700",
    gray: "#8B949E",
    darkGray: "#6E7681",
    white: "#E6EDF3",
  },
  syntax: {
    // Variables
    variable: "white",
    parameter: "orange",
    member: "purple",
    
    // Functions
    function: "yellow",
    method: "yellow",
    builtin: "cyan",
    
    // Types
    type: "orange",
    
    // Constants & Literals
    constant: "blue",
    numeric: "blue",
    boolean: "blue",
    string: "green",
    escape: "cyan",
    
    // Comments
    comment: "gray",
    
    // Keywords
    keyword: "red",
    
    // Markup
    heading: "blue",
    link: "blue",
    raw: "green",
    list: "red",
    quote: "gray",
    
    // Punctuation
    delimiter: "darkGray",
    bracket: "white",
    
    // Operators
    operator: "red",
    
    // Labels
    label: "purple",
  },
};
