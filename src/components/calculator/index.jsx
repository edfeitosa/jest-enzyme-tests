import React, { Component, Fragment } from 'react';

class Calculator extends Component {

  state = {
    showForm: false
  }

  chargingForm = () => {
    this.setState({ showForm: true });
  }

  render() {

    const { showForm } = this.state;

    return (
      <Fragment>
        {
          showForm ?
            <Fragment>
              <p>Preencha todos os dados</p>
              <p>
                <input id="firstNumber" type="form" placeholder="Informe o primeiro valor" />
                <br />
                <input id="secondNumber" type="form" placeholder="Informe o segundo valor" />
                <br />
                <button id="add">Somar</button> 
                <button id="subtract">Subtrair</button> 
                <button id="multiply">Multiplicar</button> 
                <button id="share">Dividir</button> 
              </p>
            </Fragment>
            :
            <p>Carregando calculadora...</p>
        }
      </Fragment>
    )
  }
}

export default Calculator;