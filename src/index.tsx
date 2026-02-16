import { addDefaultParsers } from "@opentui/core";
import { render } from "@opentui/solid";
import { parserRegistry } from "@/themes";
import arg from "arg";
import Editor from "./components/editor";

// Initialize parsers with Helix queries
addDefaultParsers(parserRegistry);

const args = arg({
  // Types
  "--help": Boolean,
  "--file": String,
  "-f": "--file",
});
//<text>{args["--file"]}</text>
const App = () => {
  if (!args["--file"]) {
    return (
      <box
        width="100%"
        height="100%"
        padding={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <text>No file provided</text>
      </box>
    );
  }
  return (
    <box
      width="100%"
      height="100%"
      padding={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Editor mdFilePath={args["--file"]} />
    </box>
  );
};

render(() => <App />, {
  targetFps: 120,
  exitOnCtrlC: true,
});
