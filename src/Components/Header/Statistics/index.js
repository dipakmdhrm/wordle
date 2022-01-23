import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faChartBar} />

export class Statistics extends Component {
  render() {
    return element;
  }
}

export default Statistics;
