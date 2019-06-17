import React, { Component, Fragment } from 'react';

class Calculator extends Component {

  state = {
    showForm: false,
    firstValue: null,
    secondValue: null,
    result: null
  }

  style = {
    input: {
      width: '123px',
      height: '25px',
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      marginTop: '5px'
    },
    button: {
      width: '30px',
      height: '30px',
      float: 'left',
      margin: '5px 5px 0px 0px'
    },
    clear: {
      width: '135px',
      height: '30px',
      float: 'left',
      margin: '5px 5px 0px 0px'
    }
  }

  chargingForm = () => {
    this.setState({ showForm: true });
  }

  handleFirstValue = event => {
    this.setState({ firstValue: event.target.value });
  }

  handleSecondValue = event => {
    this.setState({ secondValue: event.target.value });
  }

  clear = () => {
    this.setState({
      firstValue: null,
      secondValue: null,
      result: null
    });
    this.inputFirstValue.value = '';
    this.inputSecondValue.value = '';
  }

  add = () => {
    (this.state.firstValue && this.state.secondValue) &&
      this.setState({
        result:
          parseFloat(this.state.firstValue) + 
          parseFloat(this.state.secondValue)
      });
  }

  subtract = () => {
    (this.state.firstValue && this.state.secondValue) &&
      this.setState({
        result:
          parseFloat(this.state.firstValue) - 
          parseFloat(this.state.secondValue)
      });
  }

  multiply = () => {
    (this.state.firstValue && this.state.secondValue) &&
      this.setState({
        result:
          parseFloat(this.state.firstValue) * 
          parseFloat(this.state.secondValue)
      });
  }

  share = () => {
    (this.state.firstValue && this.state.secondValue) &&
      this.setState({
        result:
          parseFloat(this.state.firstValue) / 
          parseFloat(this.state.secondValue)
      });
  }

  componentDidMount() {
    this.chargingForm();
  }

  render() {

    const {
      showForm,
      result
    } = this.state;

    return (
      <Fragment>
        {
          showForm ?
            <Fragment>
              <p>Informe os valores para calcular</p>
              <p>
                <input
                  style={this.style.input}
                  id="firstNumber"
                  type="number"
                  placeholder="Primeiro valor"
                  onKeyUp={this.handleFirstValue}
                  ref={el => this.inputFirstValue = el}
                />
                <br />
                <input
                  style={this.style.input}
                  id="secondNumber"
                  type="number"
                  placeholder="Segundo valor"
                  onKeyUp={this.handleSecondValue}
                  ref={el => this.inputSecondValue = el}
                />
                <br />
                <button
                  style={this.style.button}
                  onClick={this.add}
                  id="add">+</button>
                <button
                  style={this.style.button}
                  onClick={this.subtract}
                  id="subtract">-</button>
                <button
                  style={this.style.button}
                  onClick={this.multiply}
                  id="multiply">x</button>
                <button
                  style={this.style.button}
                  onClick={this.share}
                  id="share">/</button>
                <br /><br />
                <button
                  style={this.style.clear}
                  onClick={this.clear}
                  id="clear">Limpar</button>
              </p>
              <br />
              {
                result &&
                <p>Resultado: {result}</p>
              }
            </Fragment>
            :
            <p>Carregando calculadora...</p>
        }
      </Fragment>
    )
  }
}

export default Calculator;