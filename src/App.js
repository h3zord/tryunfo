import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
    };
  }

  saveStateInput = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }));
  };

  buttonDisabled = () => {
    const { state } = this;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const objectArr1 = Object.values(state);
    const objectArr2 = [cardAttr1, cardAttr2, cardAttr3];
    let bool3 = false;
    const maxValue = 90;
    const maxSumValue = 210;
    const sumValues = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const bool1 = objectArr1.some((el1) => el1 === '');
    const bool2 = objectArr2.some((el2) => Number(el2) > maxValue || Number(el2) < 0);
    if (sumValues > maxSumValue) bool3 = true;
    console.log(bool1, bool2, bool3);
    return bool1 || bool2 || bool3;
  }

  render() {
    const {

      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;
    const { saveStateInput } = this;
    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ this.buttonDisabled() }
          onInputChange={ saveStateInput }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>

    );
  }
}

export default App;
