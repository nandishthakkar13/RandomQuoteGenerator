import React, { Component } from "react";
import "./Quote.css";

//const apiUrl = "http://api.quotable.io/random";

class Quote extends Component {
 
  render() {
    return (
      <div className="quote-container" id="quote-container">
        <div className="quote-text">
          <i className="fas fa-quote-left quote-mark"></i>
          &nbsp;
          <span id="quote">
            What you are is what you have been. What you'll be is what you do now.
          </span>
          &nbsp;
          <i className="fas fa-quote-right quote-mark"></i>
        </div>
        <div className="quote-author">
          <span id="author">&#8212;Buddha</span>
        </div>
        <div className="button-container">
          <button className="twitter-button" id="twitter" title="Tweet This!">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="new-quote" title="Get a new Title!">
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quote;
