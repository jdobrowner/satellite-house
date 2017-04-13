import React, { Component } from 'react';
import Slideshow from './slideshow';
import Gmap from './google-map';

import FrontRender from '../../assets/renders/FrontRender.png';
import BackRender from '../../assets/renders/BackRender.png';
import FrontCornerRender from '../../assets/renders/FrontCornerRender.png';
import FromRampRender from '../../assets/renders/FromRampRender.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slideshow speed={1000} autoplay={true}>
          <img src={FrontRender} onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src={FrontCornerRender} />
          <img src={BackRender} />
          <img src={FromRampRender} />
        </Slideshow>
        <div className="div-with-map">
          <Gmap />
        </div>
      </div>
    )
  }
}
