import React, { Component } from "react";

class TimeClass extends Component {
  state = { date: new Date() };

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

  render() {
    let arr = [1, 2, 3];
    const { locale, children } = this.props;
    const { date } = this.state;
    return (
      <div>
        {/* <h4>Hello-{children}-{this.state.date.toLocaleTimeString(locale)}</h4> */}

        {arr.map((value) => (
          <h4 key={value}>
            Hello-{children}-{date.toLocaleTimeString(locale)}
          </h4>
        ))}
        <br />
      </div>
    );
  }
}

export default TimeClass;
