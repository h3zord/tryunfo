import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const totalPoints = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const MAGIC_NUMBER = 210;

    const checkBoxInput = (
      <label htmlFor="superTrunfo">
        A carta é Super Trunfo?
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          id="superTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );

    return (
      <fieldset className="field">

        <p className="title">ADICIONE NOVA CARTA</p>

        <label htmlFor="cardName">
          Nome da carta:
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição da carta:
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="firstAttribute">
          Insira o primeiro atributo da carta:
          <input
            type="number"
            data-testid="attr1-input"
            placeholder="Valor máximo: 90 pontos"
            name="cardAttr1"
            id="firstAttribute"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="secondAttribute">
          Insira o segundo atributo da carta:
          <input
            type="number"
            data-testid="attr2-input"
            placeholder="Valor máximo: 90 pontos"
            name="cardAttr2"
            id="secondAttribute"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="thirdAttribute">
          Insira o terceiro atributo da carta:
          <input
            type="number"
            data-testid="attr3-input"
            placeholder="Valor máximo: 90 pontos"
            name="cardAttr3"
            id="thirdAttribute"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <span>{`Pontos Restantes = ${MAGIC_NUMBER - totalPoints}`}</span>

        <label htmlFor="imgURL">
          insira a URL da imagem:
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="imgURL"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          Qual a raridade da carta?
          <select
            data-testid="rare-input"
            name="cardRare"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>Normal</option>
            <option>Rara</option>
            <option>Épica</option>
          </select>
        </label>

        {
          hasTrunfo
            // eslint-disable-next-line max-len
            ? <p className="already-trunfo">Você já tem um Super Trunfo em seu baralho!</p>
            : checkBoxInput
        }

        <button
          type="button"
          data-testid="save-button"
          name="save"
          id="save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
