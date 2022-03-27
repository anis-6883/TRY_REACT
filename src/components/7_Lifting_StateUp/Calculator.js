import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import { TemperatureInput } from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from "./converter";

class Calculator extends Component {
  state = { temperature: null, scale: "c" };

  handelChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handelChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handelChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </>
    );
  }
}

export default Calculator;
