import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faQuestionCircle} />

export class Help extends Component {
  render() {
    return element
  }
}

export default Help;
