import React, { Component } from 'react';
import './KeyboardKey.css';

export class KeyboardKey extends Component {
  render() {
    return <div className="keyboard-key">{this.props.keyValue}</div>;
  }
}

export default KeyboardKey;
