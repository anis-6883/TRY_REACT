import React, { Component } from "react";
import Button from "./Button";

class TimeClass extends Component {
  state = {
    date: new Date(),
    locale: "en-US",
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  convertTimeZone = (locale) => {
    this.setState({
      locale, // locale: locale,
    });
  };

  render() {
    const { children } = this.props;
    const { locale, date } = this.state;
    return (
      <div>
        <h4>
          Hello-{children}-{date.toLocaleTimeString(locale)}
        </h4>
        {/* <button onClick={() => this.convertTimeZone("bn-BD")}>
          Convert BD-TimeZone
        </button> */}
        <Button change={this.convertTimeZone} locale="bn-BD" />
      </div>
    );
  }
}

export default TimeClass;
