// VARIABILI

import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

// CLASS COMPONENT
class App extends Component {

  // ARRAY
  state = {
    cards: [
      { id: 0, nome: "California", prezzo: 1.99, immagine: california },
      { id: 1, nome: "Dragon", prezzo: 3.49, immagine: dragon },
      { id: 2, nome: "Dynamite", prezzo: 2.49, immagine: dynamite },
      { id: 3, nome: "Philadelphia", prezzo: 0.99, immagine: philadelphia },
      { id: 4, nome: "Rainbow", prezzo: 2.99, immagine: rainbow },
      { id: 5, nome: "Shrimp", prezzo: 1.49, immagine: shrimp },
    ]
  }

  // funzione per ELIMINARE card

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards })
  }

  render() {
    return (

      // FRAGMENT JSX
      <>
        <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr></hr>
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onDelete={this.handleDelete}
                card={card}
              />
            ))}
          </div>
        </div>
      </>

    );
  }
}

export default App;
