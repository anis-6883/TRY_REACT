import React, { Component } from "react";

export class Button extends Component {
  // shouldComponentUpdate(nextProps) {
  //   const { change: currentChange } = this.props;
  //   const { change: nextChange } = nextProps;
  //   return currentChange === nextChange ? false : true;
  // }

  render() {
    const { change, locale } = this.props;
    return <button onClick={() => change(locale)}>Convert BD-TimeZone</button>;
  }
}

export default Button;
