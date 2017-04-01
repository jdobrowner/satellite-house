import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import FrontRender1 from '../../assets/renders/front_render_1.png';
import BackRender1 from '../../assets/renders/back_render_1.png';
// import modernHome from '../../assets/renders/modernhome.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay={true} autoplayInterval={10000} speed={1000} easing="linear"
          wrapAround={true}>
        <img src={FrontRender1}/>
        <img src={BackRender1}/>
      </Carousel>

      </div>
    )
  }
}
