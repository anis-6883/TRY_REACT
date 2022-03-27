import React from "react";

function TimeFunction({ locale, children }) {
  return (
    <div>
      <h5>
        Hello-{children}-{new Date().toLocaleTimeString(locale)}
      </h5>
    </div>
  );
}

export default TimeFunction;
