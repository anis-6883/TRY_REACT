import React, { Component } from "react";

class TimeClass extends Component {
  render() {
    const { locale, children } = this.props;

    return (
      <div>
        <h5>
          Hello-{children}-{new Date().toLocaleTimeString(locale)}
        </h5>
      </div>
    );
  }
}

export default TimeClass;
