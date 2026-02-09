import { TextAttributes } from "@opentui/core";
import { render } from "@opentui/solid";
import { createResource, createSignal } from "solid-js";

const fetchUser = async (id: number | string) => {
  if (id === null || id === 0) {
    return null;
  }
  const people = await fetch(`https://swapi.dev/api/people/${id}/`);
  return people.json();
};
const App = () => {
  const [userId, setUserId] = createSignal<string | number | null>(null);

  const [user] = createResource(userId, fetchUser);
  return (
    <box
      padding={1}
      width={"100%"}
      height={"100%"}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <box border={true} padding={1}>
        <input
          width={20}
          backgroundColor="#1a1a1a"
          focusedBackgroundColor="#2a2a2a"
          placeholder="Please enter an userId"
          onInput={(value) => setUserId(value)}
        />
      </box>
      <box border={true}>
        <scrollbox height={40} width={70}>
          <text fg={"#C4693D"}>{JSON.stringify(user(), null, 2)}</text>
        </scrollbox>
      </box>
    </box>
  );
};

render(() => <App />, {
  targetFps: 120,
  exitOnCtrlC: true,
});
