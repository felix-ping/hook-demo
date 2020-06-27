import React from 'react'
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function tryConvert(temperature, callback) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) { return '' }
  const output = callback(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function TemperatureInput(props) {
  return (
    <div>
      <div>Enter temperature in {scaleNames[props.scale]}:</div>
      <input value={props.temperature} onChange={(e) => props.onChanges(e.target.value)} />
    </div>
  )
}

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(e) {
//     this.props.onChanges(e.target.value)
//   }
//   render() {
//     const temperature = this.props.temperature
//     const scale = this.props.scale
//     return (
//       <div>
//         <div>Enter temperature in {scaleNames[scale]}:</div>
//         <input value={temperature} onChange={this.handleChange} />
//       </div>
//     )
//   }
// }
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }
  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature: temperature })
  }
  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature: temperature })
  }
  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const Fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput scale='c' onChanges={this.handleCelsiusChange} temperature={celsius}></TemperatureInput>
        <TemperatureInput scale='f' onChanges={this.handleFahrenheitChange} temperature={Fahrenheit}></TemperatureInput>
      </div>
    )
  }
}


export default Calculator