import { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setTodo(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setTodo({});
        setError("There is a problem!");
      });
  }, []);

  return (
    <div>
      <br />
      <br />
      {loading ? "Loading...." : todo.title}
      {error || null}
    </div>
  );
}
