import { useState } from "react";

export default function RegisterFunction() {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    developer: "React",
    isStudent: false,
  });

  const inputHandler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setRegister({
      ...register,
      [e.target.name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, password, developer, isStudent } = register;
    const status = isStudent ? "I am a Student" : "I am not a Student";
    alert(
      `Username: ${username}
      Password: ${password}
      Developer: ${developer}
      Status: ${status}
      Register Succesfully!`
    );
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>Registration Functional Form</h3>
        <hr />
        <input
          type="text"
          name="username"
          placeholder="Enter Username..."
          value={register.username}
          onChange={inputHandler}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password..."
          value={register.password}
          onChange={inputHandler}
        />
        <br />
        <br />
        <select
          name="developer"
          value={register.developer}
          onChange={inputHandler}
        >
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
        <br />
        <br />
        Are you a Student?
        <input
          type="checkbox"
          name="isStudent"
          checked={register.isStudent}
          onChange={inputHandler}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
