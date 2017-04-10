import React, { Component } from 'react';
import Slideshow from './slideshow';
import Gmap from './google-map';

import FrontRender1 from '../../assets/renders/front_render_1.png';
import BackRender1 from '../../assets/renders/back_render_1.png';
// import modernHome from '../../assets/renders/modernhome.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slideshow>
          <img src={FrontRender1}/>
          <img src={BackRender1}/>
        </Slideshow>
        <div className="div-with-map">
          <Gmap />
        </div>
      </div>
    )
  }
}
