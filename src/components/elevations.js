import React, { Component } from 'react';

import northElevation from '../../assets/plans/SH-Book_13.png';
import westElevation from '../../assets/plans/SH-Book_11.png';
import southElevation from '../../assets/plans/SH-Book_14.png';
import eastElevation from '../../assets/plans/SH-Book_12.png';
import westSection from '../../assets/plans/SH-Book_15.png';

export default class Elevations extends Component {
  render() {
    return (
      <div className="page">

        <h3>North Elevation</h3>
        <div className="plan-container">
          <img src={northElevation} />
        </div>

        <h3>West Elevation</h3>
        <div className="plan-container">
          <img src={westElevation} />
        </div>

        <h3>South Elevation</h3>
        <div className="plan-container">
          <img src={southElevation} />
        </div>

        <h3>East Elevation</h3>
        <div className="plan-container">
          <img src={eastElevation} />
        </div>

        <h3>West Section</h3>
        <div className="plan-container">
          <img src={westSection} />
        </div>

      </div>
    )
  }
}
