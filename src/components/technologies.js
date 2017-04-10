import React, { Component } from 'react';

import heatingCooling from '../../assets/plans/SH-Book_07.png';
import icf from '../../assets/plans/SH-Book_06.png';

export default class Technologies extends Component {
  render() {
    return (
      <div className="page">

        <h3>Walls</h3>
        <div className="plan-container">
          <img src={icf} />
        </div>

        <h3>Heating / Cooling</h3>
        <div className="plan-container">
          <img src={heatingCooling} />
        </div>


      </div>
    )
  }
}
