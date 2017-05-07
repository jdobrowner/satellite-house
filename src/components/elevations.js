import React, { Component } from 'react';
import Subtitle from './subtitle';

import northElevation from '../../assets/plans/SH-Book_13.png';
import westElevation from '../../assets/plans/SH-Book_11.png';
import southElevation from '../../assets/plans/SH-Book_14.png';
import eastElevation from '../../assets/plans/SH-Book_12.png';
import westSection from '../../assets/plans/SH-Book_15.png';

export default class Elevations extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.pageChange('elevations');
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="page">

        <Subtitle text="North Elevation" />
        <div className="elevation-container">
          <img src={northElevation} />
        </div>

        <Subtitle text="West Elevation" />
        <div className="elevation-container">
          <img src={westElevation} />
        </div>

        <Subtitle text="South Elevation" />
        <div className="elevation-container">
          <img src={southElevation} />
        </div>

        <Subtitle text="East Elevation" />
        <div className="elevation-container">
          <img src={eastElevation} />
        </div>

        <Subtitle text="West Section" />
        <div className="elevation-container">
          <img src={westSection} />
        </div>

      </div>
    )
  }
}
