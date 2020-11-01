import React, { Component } from "react";
import "./Quote.css";

const apiUrl = "http://api.quotable.io/random";

class Quote extends Component {
  constructor() {
    super();

    this.state = {
      quoteDetails:{
        quote: '',
        quoteAuthor: ''
      }
    };


    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    

    const resp = await fetch(apiUrl);
    const quoteResp = await resp.json();

    this.setState(prevState =>({
      quoteDetails:{
        ...prevState.quoteDetails,
        quote:quoteResp.content,
        quoteAuthor: quoteResp.author
      }

    }));
  }


 async handleChange(){


  const resp = await fetch(apiUrl);
  const quoteResp = await resp.json();

  this.setState(prevState =>({
    quoteDetails:{
      ...prevState.quoteDetails,
      quote:quoteResp.content,
      quoteAuthor: quoteResp.author
    }

  }));

}

  render() {
    return (
      <div className="quote-container" id="quote-container">
        <div className="quote-text">
          <i className="fas fa-quote-left quote-mark"></i>
          &nbsp;
          <span id="quote">
           {this.state.quoteDetails.quote}
          </span>
          &nbsp;
          <i className="fas fa-quote-right quote-mark"></i>
        </div>
        <div className="quote-author">
          <span id="author">&#8212;{this.state.quoteDetails.quoteAuthor}</span>
        </div>
        <div className="button-container">
          <button className="twitter-button" id="twitter" title="Tweet This!">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="new-quote" title="Get a new Title!" onClick={this.handleChange}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
