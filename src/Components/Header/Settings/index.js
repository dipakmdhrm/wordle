import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCog} />

export class Settings extends Component {
  render() {
    return element
  }
}

export default Settings;
