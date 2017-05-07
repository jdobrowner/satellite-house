import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MediaQuery from "react-responsive";
import homeIcon from '../../assets/home-icon-4.png';

const iconStyle = { width: '18px', height: '18px' };
const Icon = (props) => <div><img src={homeIcon} style={iconStyle}/></div>

// api key AIzaSyCjRMZVOaqznmYViZluqxoBFmS8x2slE7w


export default class SimpleMap extends Component {
  constructor() {
    super();
  }

  render() {
    const defaultProps = {
      center: [34.454977, -119.191575],
      zoom: 14
    };
    const divStyle1 = {
      height: '450px',
      width: '100%'
    };
    const iconStyle = {
      width: '18px',
      height: '18px'
    }
    return (
        <div className="map-container" style={divStyle1}>
        <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}
          bootstrapURLKeys={{ key: 'AIzaSyCjRMZVOaqznmYViZluqxoBFmS8x2slE7w' }} >
          <Icon lat={34.454977} lng={-119.1918} />
          </GoogleMapReact>
        </div>
    );
  }
}
