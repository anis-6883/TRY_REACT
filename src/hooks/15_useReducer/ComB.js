import React, { useContext } from "react";
import { counterContext } from "./ReducerContext";

function ComB() {
  const countContext = useContext(counterContext);
  const { countDispatch, fire } = countContext;

  return (
    <div>
      <button type="button" onClick={() => countDispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => countDispatch("decrement")}>
        Decrement {fire}
      </button>
    </div>
  );
}

export default ComB;
