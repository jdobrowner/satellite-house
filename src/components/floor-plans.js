import React, { Component } from 'react';
import overview from '../../assets/plans/SH-Book_02.png';
import mainWing from '../../assets/plans/SH-Book_03.png';
import bedroomWing from '../../assets/plans/SH-Book_04.png';
import bridge from '../../assets/plans/SH-Book_05.png';
import sitePlan from '../../assets/plans/SH-Book_16.png';

export default class FloorPlans extends Component {
  render() {
    return (
      <div className="page">

        <h3>Overview</h3>
        <div className="plan-container">
          <img src={overview} />
        </div>

        <h3>Main Wing</h3>
        <div className="plan-container">
          <img src={mainWing} />
        </div>

        <h3>Bedroom Wing</h3>
        <div className="plan-container">
          <img src={bedroomWing} />
        </div>

        <h3>Bridge</h3>
        <div className="plan-container">
          <img src={bridge} />
        </div>

        <h3>Site Plan</h3>
        <div className="plan-container">
          <img src={sitePlan} />
        </div>

      </div>
    )
  }
}
