import React, { Component } from 'react';
import Slideshow from './slideshow';
import Subtitle from './subtitle';

import InteriorView1 from '../../assets/views/1_GreatRoom.png';
import InteriorView2 from '../../assets/views/2_GreatRoom.png';
import InteriorView3 from '../../assets/views/3_GreatRoom.png';
import InteriorView4 from '../../assets/views/4_Bridge.png';
import InteriorView5 from '../../assets/views/5_Hallway.png';
import InteriorView6 from '../../assets/views/6_Hallway.png';
import InformativeView1 from '../../assets/views/7_BirdsEye.png';
import InformativeView2 from '../../assets/views/8_BirdsEye.png';
import InformativeView3 from '../../assets/views/9_NoRoof.png';
import InformativeView4 from '../../assets/views/10_NoRoof.png';
import InformativeView5 from '../../assets/views/11_NoWestWall.png';

const Number = (props) => {
  const divStyle = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#fcd716',
    textAlign: 'center',
    lineHeight: '20px',
    fontSize: '13px'
  }
  return <div style={divStyle}>{props.number}</div>
}
const Info = (props) => {
  const pStyle = {
    display: 'inline-block',
    paddingLeft: '10px',
    fontSize: '16px'
  };
  return (
    <div className="view-info">
      <Number number={props.number} />
      <p style={pStyle}>{props.info}</p>
    </div>
  )
}
const infoText = [
  'Great Room',
  'Great Room',
  'Great Room',
  'Bridge',
  'Bridge & Hallway',
  'Hallway',
  "Bird's Eye View",
  "Bird's Eye View",
  "Bird's Eye View - No Roof",
  'Bedroom Wing - No Roof',
  'Sectional View - No West Wall'
];

export default class Views extends Component {
  render() {
    return (
      <div className="page">
        <Subtitle text="Interior Views" />
        <Slideshow speed={300} autoplay={false}>
          <img src={InteriorView1} onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src={InteriorView2} />
          <img src={InteriorView3} />
          <img src={InteriorView4} />
          <img src={InteriorView5} />
          <img src={InteriorView6} />
        </Slideshow>
        <div className="info-container">
          <Info number={1} info={infoText[0]} />
          <Info number={2} info={infoText[1]} />
          <Info number={3} info={infoText[2]} />
          <Info number={4} info={infoText[3]} />
          <Info number={5} info={infoText[4]} />
          <Info number={6} info={infoText[5]} />
        </div>

        <Subtitle text="Informative Views" />
        <Slideshow speed={300} autoplay={false}>
          <img src={InformativeView1} onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src={InformativeView2} />
          <img src={InformativeView3} />
          <img src={InformativeView4} />
          <img src={InformativeView5} />
        </Slideshow>
        <div className="info-container">
          <Info number={7} info={infoText[6]} />
          <Info number={8} info={infoText[7]} />
          <Info number={9} info={infoText[8]} />
          <Info number={10} info={infoText[9]} />
          <Info number={11} info={infoText[10]} />
        </div>
      </div>
    )
  }
}
