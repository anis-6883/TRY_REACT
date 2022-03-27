import React, { Component } from "react";

class TimeClass extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //     counter: 0,
  //   };
  // }

  state = { date: new Date(), counter: 0 };

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

  clickHandler = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    const { locale, children } = this.props;
    const { date, counter } = this.state;

    return (
      <div>
        <h5>
          Hello-{children}-{date.toLocaleTimeString(locale)}
        </h5>
        <button onClick={this.clickHandler}>Counter {counter}</button>
      </div>
    );
  }
}

export default TimeClass;
