import React, { Component } from 'react';
import WordleKey from './WordleKey';
import './WordleRow.css';

export class WordleRow extends Component {
  render() {
    const wordleKeys = [];
    for (let i = 0; i < 5; i++)
      wordleKeys.push(<WordleKey />);

    return (
      <div className="wordle-row">{wordleKeys}</div>
    );
  }
}

export default WordleRow;
