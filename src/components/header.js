import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from "react-responsive";
// import Menu from 'react-burger-menu';
var Menu = require('react-burger-menu').slide;

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '30px',
    top: '20px'
  },
  bmBurgerBars: {
    height: '2px',
    background: '#373a47'
  },
  bmCrossButton: {
    marginTop: '-30px',
    height: '40px',
    width: '40px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    marginTop: '-36px',
    background: 'grey',
    padding: '0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'black',
    padding: '20px'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-title">
          <Link to="/">
            <h1>Satellite House</h1>
          </Link>
            <h3>Ojai, Ca</h3>
        </div>

        <nav>
          <MediaQuery maxWidth={899}>
            <Menu right={true} styles={styles}>
              <br/><br/>
              <Link to="/views">Views</Link><br/><br/>
              <Link to="/floor-plans">Floor Plans</Link><br/><br/>
              <Link to="/elevations">Elevations</Link><br/><br/>
              <Link to="/technologies">Technologies</Link><br/><br/>
              <Link to="/windows">Windows</Link><br/><br/>
              <Link to="/contact">Contact</Link>
            </Menu>
          </MediaQuery>
          <MediaQuery minWidth={900}>
            <ul>
              <Link to="/views"><li>Views</li></Link>|
              <Link to="/floor-plans"><li>Floor Plans</li></Link>|
              <Link to="/elevations"><li>Elevations</li></Link>|
              <Link to="/technologies"><li>Technologies</li></Link>|
              <Link to="/windows"><li>Windows & Doors</li></Link>|
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </MediaQuery>
        </nav>
      </header>
    )
  }
}
