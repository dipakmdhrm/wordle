import React, { Component } from 'react';
import './Popup.css';

export class Popup extends Component {
  render() {
    return(
      <div id="popup-container">
        <div id="popup">
          <header id="popup-header">
            <button id="popup-close"></button>
          </header>
          <section id="popup-content">

          </section>
        </div>
      </div>
    )
  }
}

export default Popup;
