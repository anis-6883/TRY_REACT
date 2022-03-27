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
      locale,
    });
  };

  render() {
    const { children } = this.props;
    const { locale, date } = this.state;

    // let button;

    // if (locale === "bn-BD") {
    //   button = <Button change={this.convertTimeZone} locale="en-US" />;
    // } else {
    //   button = <Button change={this.convertTimeZone} locale="bn-BD" />;
    // }

    return (
      <div>
        <h4>
          Hello-{children}-{date.toLocaleTimeString(locale)}
        </h4>
        {/* {button} */}
        {locale === "bn-BD" ? (
          <Button change={this.convertTimeZone} locale="en-US" show={false} />
        ) : (
          <Button change={this.convertTimeZone} locale="bn-BD" show={true} />
        )}
      </div>
    );
  }
}

export default TimeClass;
