import React, { Component } from "react";

export class Button extends Component {
  // shouldComponentUpdate(nextProps) {
  //   const { change: currentChange } = this.props;
  //   const { change: nextChange } = nextProps;
  //   return currentChange === nextChange ? false : true;
  // }

  render() {
    const { change, locale } = this.props;
    return (
      <>
        <button onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change Clock" : "গড়ি পরিবর্তন করুন"}
        </button>
      </>
    );
  }
}

export default Button;
