import React, { Component } from 'react';
import Subtitle from './subtitle';

import heatingCooling from '../../assets/plans/SH-Book_07.png';
import icf from '../../assets/plans/SH-Book_06.png';

export default class Technologies extends Component {
  render() {
    return (
      <div className="page">

        <Subtitle text="Walls" />
        <div className="floor-plan-container walls">
          <img src={icf} />
        </div>

        <Subtitle text="Heating and Cooling" />
        <div className="floor-plan-container">
          <img src={heatingCooling} />
        </div>


      </div>
    )
  }
}
