import { bool } from 'prop-types';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ bool }
          hasTrunfo={ bool }
          isSaveButtonDisabled={ bool }
          onInputChange={ () => {} }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo={ bool }
        />
      </>

    );
  }
}

export default App;
