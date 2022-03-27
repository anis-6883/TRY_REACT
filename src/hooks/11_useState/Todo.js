import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const inputHandling = (e) => {
    const inputValue = e.target.value;
    const warningValue = inputValue.includes(".js")
      ? "Do you know JavaScripts?"
      : null;
    setWarning(warningValue);
    setTodo(inputValue);
  };
  return (
    <div>
      <input type="text" value={todo} onChange={inputHandling} />
      <p>{todo}</p>
      <p>
        <b>{warning || "Good Choice!"}</b>
      </p>
    </div>
  );
}

export default Todo;
