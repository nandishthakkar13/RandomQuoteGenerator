import React, { Component } from 'react'
import "./App.css";
import Quote from './Quote';
import QuoteTeller from './Quote-Teller';



const apiUrl = "http://api.quotable.io/random";

 class App extends Component {
  constructor() {
    super();

    this.state = {
      quoteDetails: {
        quote: "",
        quoteAuthor: "",
      },

      changeTextSize: false,
      isToggleOn: false,
    };

    this.getQuote = this.getQuote.bind(this);
  }

  

  async getQuote(){

    const resp = await fetch(apiUrl);
    const quoteResp = await resp.json();
  
    this.setState((prevState) => ({
      quoteDetails: {
        ...prevState.quoteDetails,
        quote: quoteResp.content,
        quoteAuthor: quoteResp.author,
      },
      changeTextSize: quoteResp.length >= 100 ? true : false,
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  
componentDidMount() {
  this.getQuote();
}

  render() {
    return (
      <div>
        <Quote getQuote={this.getQuote} quoteDetails= {this.state.quoteDetails} changeTextSize={this.state.changeTextSize} isToggleOn={this.state.isToggleOn} />
        <QuoteTeller/>
      </div>
    )
  }
}


export default App;
