import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount} type="button">
        Clicked {count} Times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
