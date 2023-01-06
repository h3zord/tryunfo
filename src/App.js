/* eslint-disable max-lines */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import logo from './images/logo_tryunfo.svg';
import './app.css';

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
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      dataCard: [],
      dataFilterName: {
        dataName: '',
      },
      dataFilterRare: {
        dataRare: '',
      },
      dataFilterTrunfo: {
        dataTrunfo: false,
      },
      boolValue: false,
      boolAux: true,
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
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'Normal',
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

  deleteCard = ({ target }) => {
    const { dataCard } = this.state;
    this.setState((prevState) => ({
      dataCard: prevState.dataCard.filter(({ cardName }) => cardName !== target.id),
    }));
    const trunfoCard = dataCard.some(({ cardTrunfo }) => cardTrunfo);
    if (trunfoCard) this.setState({ hasTrunfo: false });
  }

  filterNameCard = ({ target }) => {
    const { value } = target;
    this.setState({
      dataFilterName: {
        dataName: value.toLowerCase(),
      },
    });
  }

  filterRareCard = ({ target }) => {
    const { value } = target;
    if (value === 'Raridade') {
      this.setState({
        dataFilterRare: {
          dataRare: '',
        },
      });
    } else {
      this.setState({
        dataFilterRare: {
          dataRare: value,
        },
      });
    }
  }

  filterTrunfoCard = ({ target }) => {
    const { checked } = target;
    if (checked) {
      this.setState({
        dataFilterTrunfo: {
          dataTrunfo: true,
        },
        boolValue: true,
        boolAux: false,
      });
    } else {
      this.setState({
        dataFilterTrunfo: {
          dataTrunfo: false,
        },
        boolValue: false,
        boolAux: true,
      });
    }
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, dataCard, dataFilterName, dataFilterRare,
      dataFilterTrunfo, boolValue, boolAux } = this.state;
    const { dataName } = dataFilterName;
    const { dataRare } = dataFilterRare;
    const { dataTrunfo } = dataFilterTrunfo;
    const { saveStateInput } = this;

    return (
      <div className="main">
        <div className="header-logo">
          <img src={ logo } alt="logo-img" />
        </div>
        <div className="main-container">
          <div className="form-container">
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
          </div>
          <div className="card-container">
            <p className="title">PRÉ-VISUALIZAÇÃO</p>
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
          </div>
        </div>
        <p className="collection">Coleção de Cartas</p>
        <div className="search-container">
          <p>Filtros de busca</p>
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Nome da Carta"
            className="name-filter"
            onChange={ this.filterNameCard }
            disabled={ boolValue }
          />
          <select
            data-testid="rare-filter"
            name="rare"
            id="rare"
            onChange={ this.filterRareCard }
            disabled={ boolValue }
          >
            <option>Raridade</option>
            <option>Normal</option>
            <option>Rara</option>
            <option>Épica</option>
          </select>
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfo"
              id="trunfo"
              onChange={ this.filterTrunfoCard }
            />
          </label>
        </div>
        <div className="all-cards">
          {
            dataCard
              .filter((name) => name.cardName.toLowerCase().includes(dataName))
              .filter((rare) => rare.cardRare.startsWith(dataRare))
              .filter((trunfo) => trunfo.cardTrunfo === dataTrunfo || boolAux)
              .map((element) => (
                <div key={ element.cardName } className="card-container">
                  <Card
                    cardName={ element.cardName }
                    cardDescription={ element.cardDescription }
                    cardAttr1={ element.cardAttr1 }
                    cardAttr2={ element.cardAttr2 }
                    cardAttr3={ element.cardAttr3 }
                    cardImage={ element.cardImage }
                    cardRare={ element.cardRare }
                    cardTrunfo={ element.cardTrunfo }
                  />
                  <button
                    type="button"
                    id={ element.cardName }
                    data-testid="delete-button"
                    onClick={ this.deleteCard }
                    className="delete-button"
                  >
                    Excluir
                  </button>
                </div>
              ))
          }
        </div>
      </div>
    );
  }
}

export default App;
