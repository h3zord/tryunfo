import React from 'react';
import './form.css';

class Form extends React.Component {
  render() {
    return (
      <fieldset className="field">
        <label htmlFor="cardName">
          Nome da carta:
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            // value=''
          />
        </label>

        <label htmlFor="description">
          Descrição da carta:
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
            // value=''
          />
        </label>

        <label htmlFor="firstAttribute">
          Insira o primeiro atributo da carta:
          <input
            type="number"
            data-testid="attr1-input"
            name="firstAttribute"
            id="firstAttribute"
            // value=''
          />
        </label>

        <label htmlFor="secondAttribute">
          Insira o segundo atributo da carta:
          <input
            type="number"
            data-testid="attr2-input"
            name="secondAttribute"
            id="secondAttribute"
            // value=''
          />
        </label>

        <label htmlFor="thirdAttribute">
          Insira o terceiro atributo da carta:
          <input
            type="number"
            data-testid="attr3-input"
            name="thirdAttribute"
            id="thirdAttribute"
            // value=''
          />
        </label>

        <label htmlFor="imgURL">
          nsira a URL da imagem:
          <input
            type="text"
            data-testid="image-input"
            name="imgURL"
            id="imgURL"
            // value=''
          />
        </label>

        <label htmlFor="rarity">
          Qual a raridade da carta?
          <select
            data-testid="rare-input"
            name="rarity"
            id="rarity"
            // value=''
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
            // value=''
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          name="save"
          id="save"
        >
          Salvar
        </button>
      </fieldset>
    );
  }
}

export default Form;
