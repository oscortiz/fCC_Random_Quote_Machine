import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuoteBox extends Component {

    render() {

        const quote =  encodeURIComponent('"' + this.props.quote.quote + '" ' + this.props.quote.character);   
        const hrefTweetQuote = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}`;

        return (
            <div className="row justify-content-center align-items-center" id="wrapper">
                <div className="col-md-4">
                    <div className="card shadow-lg m-2" id="quote-box">
                        <div className="card-header text-center">
                            <h4>Random Quote</h4>
                        </div>
                        <div className="card-body">
                            <div className="row mb-4 align-items-center">
                                <img src={this.props.quote.image} className="img-fluid float-left col-md-4 d-none d-sm-block" alt={this.props.quote.character} />
                                <div className="col-md-8">
                                    <p className="card-title text-center font-weight-bold lead" id="text">{this.props.quote.quote}</p>
                                    <p className="card-text text-right" id="author">- {this.props.quote.character}</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around">
                                <a href={hrefTweetQuote} className="btn btn-lg shadow" id="tweet-quote" data-toggle="tooltip" data-placement="bottom" title="Tweet this quote" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="btn btn-lg shadow" id="new-quote" onClick={this.props.getQuote}>New Quote</a>                               
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <a href="https://thesimpsonsquoteapi.glitch.me/" className="text-dark" target="_blank">The Simpsons Quote API</a> by <a href="https://forum.freecodecamp.com/u/jluboff/summary" className="text-dark" target="_blank">Jason Luboff</a>
                        </div>
                    </div>            
                </div>
            </div>
        );
    }
}

// Revision tipografica con PropTypes
QuoteBox.propTypes = {
    quote: PropTypes.object.isRequired,
    getQuote: PropTypes.func.isRequired
}
 
export default QuoteBox;