import React, { useState } from "react";

function TodoObject() {
  const [todo, setTodo] = useState({
    title: "",
    body: "",
  });

  const inputHandler = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  function showInfo() {
    alert(`Title : ${title}\nBody: ${body}`);
  }

  const { title, body } = todo;

  return (
    <div>
      <form onSubmit={showInfo}>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={title}
          onChange={inputHandler}
          required
          autoFocus
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Body..."
          name="body"
          value={body}
          onChange={inputHandler}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoObject;
