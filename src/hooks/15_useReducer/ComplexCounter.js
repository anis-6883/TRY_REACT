import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

export default function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState); //state management
  return (
    <div>
      <p>
        Complex Object Count - <b>{count.counter}</b>
      </p>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment",
            value: 1,
          })
        }
      >
        Increment By 1
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 2,
          })
        }
      >
        Decrement By 2
      </button>

      <p>
        Complex Object Count2 - <b>{count.counter2}</b>
      </p>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "increment2",
            value: 1,
          })
        }
      >
        Increment By 1
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "decrement2",
            value: 2,
          })
        }
      >
        Decrement By 2
      </button>
    </div>
  );
}
