import React, { Component } from 'react';
import './App.css';

const guideline = require('guideline');

class App extends Component {
  componentDidMount() {
    const visitTimes = parseInt(localStorage.getItem('visitTimes'), 10) || 0;

    if (visitTimes === 0 || visitTimes === '0') {
      const guideOptions = [{
        content: 'Welcome to use the guideline!'
      }, {
        element: document.getElementById('guide-node'),
        content: 'the first guideline dom, position is top',
        style: 'font-size: 20px; color: red;',
        position: 'bottom'
      }, {
        element: document.querySelector('.footer-node'),
        content: 'the second guideline dom, position is bottom',
        position: 'top'
      }];
    
      guideline(guideOptions, function () {
        console.log('guideline is over');
        localStorage.setItem('visitTimes', 1);
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The example of guideline</h1>
          <h2 className="App-title">Author: johvin</h2>
          <h3 className="App-title">github:&nbsp;&nbsp;<a target='_blank' rel="noopener noreferrer" href='https://github.com/johvin/guideline'>guideline</a></h3>
        </header>
        <p>The guideline how to use:</p>
        <button
          id='guide-node'
          className="App-btn"
          onClick={() => this.props.history.push('/Guideline')}
        >
          GuideLine Auto Play Page
        </button>
        <div className='footer-style'>
          <span className='footer-node' style={{ color: 'blue' }}>
            版权所有：@author:luffyZh
          </span>
        </div>
      </div>
    );
  }
}

export default App;
