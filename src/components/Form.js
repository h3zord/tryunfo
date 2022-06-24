import React from 'react';
import './form.css';

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
    return (
      <fieldset className="field">
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
            name="description"
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
            name="firstAttribute"
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
            name="secondAttribute"
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
            name="thirdAttribute"
            id="thirdAttribute"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imgURL">
          nsira a URL da imagem:
          <input
            type="text"
            data-testid="image-input"
            name="imgURL"
            id="imgURL"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          Qual a raridade da carta?
          <select
            data-testid="rare-input"
            name="rarity"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          A carta é Super Trunfo?
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="superTrunfo"
            id="superTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

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

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   cardTrunfo: PropTypes.bool.isRequired,
//   hasTrunfo: PropTypes.bool.isRequired,
//   isSaveButtonDisabled: PropTypes.bool.isRequired,
//   onInputChange: PropTypes.func.isRequired,
//   onSaveButtonClick: PropTypes.func.isRequired,
// };

export default Form;
