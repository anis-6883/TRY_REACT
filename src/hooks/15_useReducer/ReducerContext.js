import React, { useReducer } from "react";
import ComA from "./ComA";

export const counterContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function ReducerContext() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {count}</p>
      <counterContext.Provider value={{ countDispatch: dispatch, fire: "🔥" }}>
        <ComA />
      </counterContext.Provider>
    </div>
  );
}
