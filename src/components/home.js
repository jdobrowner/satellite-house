import React, { Component } from 'react';
import Slideshow from './slideshow';
import Gmap from './google-map';

import FrontRender from '../../assets/renders/FrontRender.png';
import BackRender from '../../assets/renders/BackRender.png';
import FrontCornerRender from '../../assets/renders/FrontCornerRender.png';
import FromRampRender from '../../assets/renders/FromRampRender.png';

export default class Home extends Component {
  componentWillMount() {
    this.props.pageChange('home');
  }
  render() {
    return (
      <div className="home">
        <Slideshow speed={1000} autoplay={true}>
          <img src={FrontRender} onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src={FrontCornerRender} />
          <img src={BackRender} />
          <img src={FromRampRender} />
        </Slideshow>
        <div className="home-content">
          <div className="div-with-text">
            <div className="text">
              <p><span>Project:</span>
              Design a minimalist artist’s home with a small footprint on 1 acre lot </p>
            </div>
            <div className="yellow-bar-home" />
            <div className="text">
              <p><span>Challenges:</span>
              Climate, building codes, budget, client vision</p>
            </div>
            <div className="text">
              <p><span>Flood Zone:</span>
              One major constraint is due to the lot being located in a flood zone with building codes that limit the construction materials allowed in the first 4 feet above the highest adjacent grade.</p>
            </div>
            <div className="text">
              <p><span>Weather:</span>
              Along with the extreme summer heat and cold winters, the client’s wish for thick exterior walls led to the solution of designing for ICF (insulated concrete form) construction.</p>
            </div>
            <div className="text">
              <p><span>Size:</span>
              Due to the flood plain, a minimum interior floor height of 4 feet needs to be met, potentially causing a more massive structure, which is at odds with the client’s wish for a home that takes up minimal visual space.</p>
            </div>
            <div className="text">
              <p><span>Solution:</span>
              A suspended bridge, which connects the main structure from a bedroom wing ‘satellite’ structure, giving the house a lighter look, and unique feature, while allowing potential flood waters to pass underneath.</p>
            </div>
            <div className="text">
              <p><span>Easy Access:</span>
              Client asked for 1 floor with ramp option and easy overall ADA access.</p>
            </div>
            <div className="text">
              <p><span>Goal for Self Sustaining:</span>
              Flat roof design offers green roof ability as well as solar panels. Client prefers an all electric house and no gas line would be needed on property.</p>
            </div>

          </div>
          <div className="div-with-map">
            <Gmap />
          </div>
        </div>
      </div>
    )
  }
}
