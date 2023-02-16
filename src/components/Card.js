/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import tryunfo from '../images/tryunfo.svg';

class Card extends React.Component {
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
    } = this.props;

    return (
      <>
        <div className="first-border">
          <div className="second-border">
            <div className="third-border">
              <div className="name-container">
                <p data-testid="name-card" className="name">
                  { cardName }
                </p>
              </div>
              <div className="img-container" id={ cardRare }>
                <img
                  src={ cardImage }
                  alt="card img"
                  data-testid="image-card"
                />
              </div>
              <div className="description-container">
                <p data-testid="description-card">
                  { cardDescription }
                </p>
              </div>

              <p data-testid="attr1-card" className="atributos">
                { `Ataque................................................. ${cardAttr1}` }
              </p>

              <p data-testid="attr2-card" className="atributos">
                { `Defesa................................................. ${cardAttr2}` }
              </p>

              <p data-testid="attr3-card" className="atributos">
                { `Magia.................................................. ${cardAttr3}` }
              </p>

              <div className="test">
                <span data-testid="rare-card" className="raridade">
                  { cardRare }
                </span>

                {
                  cardTrunfo ? <img src={ tryunfo } className="trunfo" alt="" /> : null
                }
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
