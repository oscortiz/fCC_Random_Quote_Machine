import React, { Component } from 'react';
import QuoteBox from'./componentes/QuoteBox';

class App extends Component {

  constructor() {
    super();

    // Definicion del estado
    this.state = {
      quote: {}
    };
  }

  componentWillMount() {
    this.getQuote();
  }

  getQuote = () => {
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes';
       
    fetch(url, { method: 'get' })
      .then(response => {
        return response.json(); 
      })
      .then(quote => {
        this.setState({
          quote: quote[0]
        })
      })
      .catch(error => {
        console.error('Error while consulting the simpsons quote api');
      });
  }

  render() {
    return (
      <div className="App container-fluid">
        <QuoteBox 
          quote={this.state.quote}
          getQuote={this.getQuote} 
        />
      </div>
    );
  }
}

export default App;
