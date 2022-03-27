import React, { Component } from "react";

class RegisterClass extends Component {
  state = {
    username: "",
    password: "",
    developer: "Vue",
    isStudent: false,
  };

  inputHandler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { username, password, developer, isStudent } = this.state;
    const status = isStudent ? "I am a Student" : "I am not a Student";
    alert(
      `Username: ${username}
       Password: ${password}
       Developer: ${developer}
       Status: ${status}
       Register Succesfully!`
    );
  };

  render() {
    const { username, password, developer, isStudent } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h3>Registration Class Form</h3>
          <hr />
          <input
            type="text"
            name="username"
            placeholder="Enter Username..."
            value={username}
            onChange={this.inputHandler}
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            value={password}
            onChange={this.inputHandler}
            required
          />
          <br />
          <br />
          <select
            name="developer"
            value={developer}
            onChange={this.inputHandler}
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
            checked={isStudent}
            onChange={this.inputHandler}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RegisterClass;
