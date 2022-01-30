import React, { Component } from 'react';

export class HelpContent extends Component {
  render() {
    return (
      <p>
        Guess the WORDLE in 6 tries.
        Each guess must be a valid 5 letter word. Hit the enter button to submit.
        After each guess, the color of the tiles will change to show how close your guess was to the word.
        Examples
        The letter W is in the word and in the correct spot.
        The letter I is in the word but in the wrong spot.
        The letter U is not in the word in any spot.
        A new WORDLE will be available each day!
      </p>
    );
  }
}

export default HelpContent;
