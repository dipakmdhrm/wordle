import React, { Component } from 'react';
import Help from './Help';
import Settings from './Settings';
import Statistics from './Statistics';
import Title from './Title';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="icons-wrap icons-left">
          <Help></Help>
        </div>
        <Title></Title>
        <div className="icons-wrap icons-right">
          <Statistics></Statistics>
          <Settings></Settings>
        </div>
      </header>
    );
  }
}

export default Header;
