import React, { Component } from "react";
import "./Quote.css";
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';

class Quote extends Component {
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getQuote();
  }
  

   

  tweetQuote = () => {
    const quoteText = this.props.quoteDetails.quote;
    const quoteAuthor = this.props.quoteDetails.quoteAuthor;

    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${quoteAuthor}`;

    window.open(tweetUrl, "_blank");
  };

  render() {
    

    return (
      <div>
        {this.props.isLoading && <Loader promiseTracker={usePromiseTracker} color={'#3d5e61'} background={'rgba(255,255,255,.5)'}/>}

      {!this.props.isLoading && 
        <div className="quote-container" id="quote-container">
          <div
            className={`${
              this.props.changeTextSize ? "long-quote" : "quote-text"
            } ${this.props.isToggleOn ? "change-font" : ""} `}
          >
            <i className="fas fa-quote-left quote-mark"></i>
            &nbsp;
            <span id="quote">{this.props.quoteDetails.quote}</span>
            &nbsp;
            <i className="fas fa-quote-right quote-mark"></i>
          </div>
          <div
            className={`${
              this.props.isToggleOn
                ? "change-author-font"
                : "regular-author-font"
            } quote-author`}
          >
            <span id="author">
              &#8212;{this.props.quoteDetails.quoteAuthor}
            </span>
          </div>
          <div className="button-container">
            <button
              className="twitter-button"
              id="twitter"
              title="Tweet This!"
              onClick={this.tweetQuote}
            >
              <i className="fab fa-twitter"></i>Tweet
            </button>
            <button
              className="new-quote"
              title="Get a new Title!"
              onClick={this.props.getQuote}
            >
              New Quote
            </button>
          </div>
        </div>
          }
      </div>
    );
  }
}

export default Quote;
