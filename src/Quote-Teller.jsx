import './QuoteTeller.css';
import Speech from 'react-speech';

import React, { Component } from 'react';



class QuoteTeller extends Component {

    render() {
        return (
            <div className='container'>
            
                <Speech  textAsButton={true} displayText={'Play'} text={`${this.props.quoteDetails.quote} by ${this.props.quoteDetails.quoteAuthor}`} voice='Google UK English Female' />
            </div>
        )
    }
}

export default QuoteTeller;