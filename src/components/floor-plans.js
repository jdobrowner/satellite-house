import React, { Component } from 'react';
import Subtitle from './subtitle';
import overview from '../../assets/plans/SH-Book_02.png';
import mainWing from '../../assets/plans/SH-Book_03.png';
import bedroomWing from '../../assets/plans/SH-Book_04.png';
import bridge from '../../assets/plans/SH-Book_05.png';
import sitePlan from '../../assets/plans/SH-Book_17.png';

export default class FloorPlans extends Component {
  render() {
    return (
      <div className="page">

        <Subtitle text="Overview" />
        <div className="floor-plan-container">
          <img src={overview} />
        </div>

        <Subtitle text="Main Wing" />
        <div className="floor-plan-container main-wing">
          <img src={mainWing} />
        </div>

        <Subtitle text="Bedroom Wing" />
        <div className="floor-plan-container bedrooms">
          <img src={bedroomWing} />
        </div>

        <Subtitle text="Bridge" />
        <div className="bridge-container">
          <img src={bridge} />
        </div>

        <Subtitle text="Site Plan" />
        <div className="site-plan-container">
          <img src={sitePlan} />
        </div>

      </div>
    )
  }
}
