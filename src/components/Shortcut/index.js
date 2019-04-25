import React, { Component } from 'react'

import './style.css';

class ShortCut extends Component {
  render () {
    return (
      <div>
        <header className="header">
          ShortCut
        </header>
        <div className="ShortCut-wrapper">
          <div>
            <strong>Open Panel</strong>
            <div className="ShortCut-list">
              <span>image</span>
              <span>Command + K</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortCut;
