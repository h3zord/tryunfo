import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      dataCard: [],
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
    return bool1 || bool2 || bool3;
  }

  saveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    const obj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      dataCard: [...prevState.dataCard, obj],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
    }));
    this.searchHasTrunfo();
  }

  searchHasTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
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
      dataCard,
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
          onSaveButtonClick={ this.saveButtonClick }
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
        <div>Coleção de Cartas</div>
        {
          dataCard.map((element) => (<Card
            key={ element.cardName }
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardImage={ element.cardImage }
            cardRare={ element.cardRare }
            cardTrunfo={ element.cardTrunfo }
          />))
        }
      </>

    );
  }
}

export default App;
