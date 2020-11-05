import './QuoteTeller.css';

import React, { Component } from 'react'

class QuoteTeller extends Component {
    render() {
        return (
            <div className='container'>
                <button id='button' title='listen to the current quote'><i class="fas fa-play"></i>&nbsp; Quote</button>
                <audio id='audio' controls hidden></audio>
            </div>
        )
    }
}

export default QuoteTeller;