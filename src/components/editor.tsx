import {
  type Component,
  createResource,
  Show,
  createEffect,
  onCleanup,
} from "solid-js";
import { resolve, dirname, basename } from "node:path";
import { watch, statSync } from "node:fs";
import { createSyntaxStyles, githubDark } from "@/themes";

interface EditorProps {
  mdFilePath: string;
}

const Editor: Component<EditorProps> = ({ mdFilePath }) => {
  const [content, { refetch }] = createResource(
    () => mdFilePath,
    async (filePath) => {
      const absolutePath = resolve(filePath);
      const file = Bun.file(absolutePath);
      if (await file.exists()) {
        return await file.text();
      }
      return `File not found: ${absolutePath}`;
    },
  );

  createEffect(() => {
    const absolutePath = resolve(mdFilePath);
    const dir = dirname(absolutePath);
    const fileName = basename(absolutePath);

    let lastMtime = 0;
    try {
      const stats = statSync(absolutePath);
      lastMtime = stats.mtimeMs;
    } catch (error) {
      // File might not exist yet
    }

    try {
      // Watch the directory instead of the file to handle atomic saves (rename/replace)
      const watcher = watch(dir, (event, triggerFileName) => {
        // Check if the specific file changed
        if (triggerFileName === fileName) {
          refetch();
          try {
            const stats = statSync(absolutePath);
            lastMtime = stats.mtimeMs;
          } catch (error) {
            // File might have been deleted
          }
        } else {
          // Fallback for atomic saves where we might miss the target filename event
          // but catch the temp file rename
          try {
            const stats = statSync(absolutePath);
            if (stats.mtimeMs !== lastMtime) {
              lastMtime = stats.mtimeMs;
              refetch();
            }
          } catch (error) {
            // File might have been deleted
          }
        }
      });

      onCleanup(() => {
        watcher.close();
      });
    } catch (error) {
      // Directory might not exist
    }
  });

  // Create syntax styles from theme
  const syntaxStyles = createSyntaxStyles(githubDark);

  return (
    <box width="100%" height="100%">
      <Show when={content()} fallback={<text>Loading...</text>}>
        <scrollbox focused width="100%" height="100%">
          <markdown
            content={content() || ""}
            syntaxStyle={syntaxStyles.markdown}
            conceal={true}
          />
        </scrollbox>
      </Show>
    </box>
  );
};

export default Editor;
