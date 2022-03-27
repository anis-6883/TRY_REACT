import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(data) => {
            return (
              <div>
                <p>
                  <b>ID: </b>
                  {data.id}
                </p>
                <p>
                  <b>Name: </b>
                  {data.name}
                </p>
              </div>
            );
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentF;
