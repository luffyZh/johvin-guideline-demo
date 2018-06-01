import React, { Component } from 'react';
import guideline from '../utils/guide';
import '../App.css';

class GuideLine extends Component {
  componentDidMount(){
    const guideOptions = [{
      content: 'Welcome, the new features guidelines come online !'
    }, {
      element: document.getElementById('header-node'),
      content: 'all system messages and notification is here',
      style: 'font-size: 20px; color: red;',
      position: 'bottom'
    }, {
      element: document.querySelector('.footer-node'),
      content: 'datepicker hint will tell you the datepicker\'s date range restriction',
      position: 'top'
    }];
    
    const gl = new guideline.Guideline(guideOptions, function (total, played) {
      console.log('guideline is over, total valid ', total, 'played ', played);
      // if you want the guideline run only once
      // localStorage.setItem('visitTimes', 1);
    });
    
    // set hint text maximum width
    gl.hintTextMaxWidth = 800
    // set hint text font size
    gl.hintFontSize = 20
    
    // start the guideline
    gl.play();
    
    // autoplay the next hint every 3 seconds
    const timer = setInterval(function () {
      if (gl.hasNext()) {
        gl.next();
      } else {
        clearInterval(timer);
        gl.stop();
      }
    }, 3000);
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 id='header-node' className="App-title">The more detail for GuideLine</h1>
          <br />
          <h2 className="App-title">The guideline will auto play</h2>
        </header>
        <div className='footer-style'>
          <span className='footer-node' style={{ color: 'blue' }}>
            版权所有：@author:luffyZh
          </span>
        </div>
      </div>
    )
  }
}

export default GuideLine;