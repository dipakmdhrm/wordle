import React, { Component } from 'react';
import KeyboardKey from './KeyboardKey';
import './Keyboard.css';

export class Keyboard extends Component {
  render() {
    const alphabet = require('alphabet');
    const keyboardKeys = []

    alphabet.upper.forEach(element => {
      const elementKey = 'alphabet-' + element;
      keyboardKeys.push(<KeyboardKey keyValue={element} key={elementKey}/>)
    });

    return <div className="keyboard">{keyboardKeys}</div>;
  }
}

export default Keyboard;
