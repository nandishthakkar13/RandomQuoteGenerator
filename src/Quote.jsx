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
        
      },

      changeTextSize: false,
      isToggleOn : false

    };


    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    

    const resp = await fetch(apiUrl);
    const quoteResp = await resp.json();
    console.log(quoteResp.length);


    this.setState(prevState =>({
      quoteDetails:{
        ...prevState.quoteDetails,
        quote:quoteResp.content,
        quoteAuthor: quoteResp.author
      },
      changeTextSize : quoteResp.length >=100 ? true : false,
      isToggleOn : !prevState.isToggleOn

    }), () => console.log(this.state.changeTextSize));
  }


 async handleChange(){


  const resp = await fetch(apiUrl);
  const quoteResp = await resp.json();
  console.log(quoteResp.length);

  this.setState(prevState =>({
    quoteDetails:{
      ...prevState.quoteDetails,
      quote:quoteResp.content,
      quoteAuthor: quoteResp.author
      
    },
    changeTextSize : quoteResp.length >=100 ? true : false,
    isToggleOn : !prevState.isToggleOn

  }), () => console.log(this.state.changeTextSize));

}

 tweetQuote= () => {

  const quoteText = this.state.quoteDetails.quote;
  const quoteAuthor = this.state.quoteDetails.quoteAuthor;

  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`;

  window.open(tweetUrl,'_blank');

}

  render() {

    return (
      <div className="quote-container" id="quote-container">
        <div className={`${this.state.changeTextSize ? 'long-quote' : 'quote-text' } ${this.state.isToggleOn ? 'change-font': ''} `}>
          <i className="fas fa-quote-left quote-mark"></i>
          &nbsp;
          <span id="quote">
           {this.state.quoteDetails.quote}
          </span>
          &nbsp;
          <i className="fas fa-quote-right quote-mark"></i>
        </div>
        <div className={`${this.state.isToggleOn ? 'change-author-font' : 'regular-author-font'} quote-author`}>
          <span id="author">&#8212;{this.state.quoteDetails.quoteAuthor}</span>
        </div>
        <div className="button-container">
          <button className="twitter-button" id="twitter" title="Tweet This!" onClick={this.tweetQuote}>
            <i className="fab fa-twitter"></i>Tweet
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
