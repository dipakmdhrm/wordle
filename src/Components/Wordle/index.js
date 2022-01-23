import React, { Component } from 'react';
import WordleRow from './WordleRow';
import './Wordle.css';

export class Wordle extends Component {
  render() {
    const wordleRows = [];
    for (let i = 0; i < 6; i++)
      wordleRows.push(<WordleRow />);

    return (
      <div className="wordle">{wordleRows}</div>
    );
  }
}

export default Wordle;
