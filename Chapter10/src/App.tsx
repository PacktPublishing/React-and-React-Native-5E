import * as React from "react";
import AsyncUpdates from "./AsyncUpdates";
import BatchingUpdates from "./BatchingUpdates";
import PrioritizingUpdates from "./PrioritizingUpdates";

interface State {
  batchingUpdates: boolean;
  prioritizingUpdates: boolean;
  asyncUpdates: boolean;
}

type Action =
  | { type: "batchingUpdates" }
  | { type: "prioritizingUpdates" }
  | { type: "asyncUpdates" };

const initialState: State = {
  batchingUpdates: false,
  prioritizingUpdates: false,
  asyncUpdates: false,
};

const reducer = (_: State, action: Action): State => {
  switch (action.type) {
    case "batchingUpdates":
      return { ...initialState, batchingUpdates: true };
    case "prioritizingUpdates":
      return { ...initialState, prioritizingUpdates: true };
    case "asyncUpdates":
      return { ...initialState, asyncUpdates: true };
    default:
      throw new Error(`Invalid action`);
  }
};

export default function App() {
  let [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: 20,
        }}
      >
        <button
          disabled={state.batchingUpdates}
          onClick={() => dispatch({ type: "batchingUpdates" })}
        >
          Batching Updates
        </button>
        <button
          disabled={state.prioritizingUpdates}
          onClick={() => dispatch({ type: "prioritizingUpdates" })}
        >
          Prioritizing Updates
        </button>
        <button
          disabled={state.asyncUpdates}
          onClick={() => dispatch({ type: "asyncUpdates" })}
        >
          Async Updates
        </button>
      </nav>
      <main style={{ margin: 20 }}>
        {state.batchingUpdates && <BatchingUpdates />}
        {state.prioritizingUpdates && <PrioritizingUpdates />}
        {state.asyncUpdates && <AsyncUpdates />}
      </main>
    </div>
  );
}
