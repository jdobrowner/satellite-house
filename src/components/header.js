import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from "react-responsive";
var Menu = require('react-burger-menu').slide;

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '40px',
    height: '30px',
    right: '30px',
    top: '35px'
  },
  bmBurgerBars: {
    height: '2px',
    background: '#2d2d2d'
  },
  bmCrossButton: {
    marginTop: '-33px',
    marginRight: '17px',
    height: '55px',
    width: '80px'
  },
  bmCross: {
    background: '#7e212d'
  },
  bmMenu: {
    marginTop: '-50px',
    background: '#dddddd',
    padding: '0',
    fontSize: '1em'
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
  constructor() {
    super();
    this.getBackgroundColor = this.getBackgroundColor.bind(this);
  }
  getBackgroundColor(currentPage) {
    if (currentPage) return 'orange-header';
    else return 'lightGrey-header';
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.currentPage !== this.props.currentPage) {
      return true;
    }
    else return false;
  }
  render() {
    const currentPage = this.props.currentPage;
    console.log(currentPage);
    return (
      <header>
        <div className="header-container">
        <div className="header-title">
          <Link to="/">
            <h1>Satellite House</h1>
          </Link>
            <h3>Ojai, Ca</h3>
        </div>

        <nav>
          <MediaQuery maxWidth={959}>
            <Menu right={true} styles={styles}>
              <div className="burger-menu-links">
                <Link to="/views"><div className={`burger-menu-link ${this.getBackgroundColor('views' === currentPage)}`}><p>Views</p></div></Link>
                <Link to="/floor-plans"><div className={`burger-menu-link ${this.getBackgroundColor('floor-plans' === currentPage)}`}><p>Floor Plans</p></div></Link>
                <Link to="/elevations"><div className={`burger-menu-link ${this.getBackgroundColor('elevations' === currentPage)}`}><p>Elevations</p></div></Link>
                <Link to="/technologies"><div className={`burger-menu-link ${this.getBackgroundColor('technologies' === currentPage)}`}><p>Technologies</p></div></Link>
                <Link to="/windows"><div className={`burger-menu-link ${this.getBackgroundColor('windows' === currentPage)}`}><p>Windows</p></div></Link>
                <Link to="/materials"><div className={`burger-menu-link ${this.getBackgroundColor('materials' === currentPage)}`}><p>Materials</p></div></Link>
              </div>
            </Menu>
          </MediaQuery>
          <MediaQuery minWidth={960}>
            <ul>
              <div className="header-buttons">
                <Link to="/views"><li className={this.getBackgroundColor('views' === currentPage)}><p>Views</p></li></Link>
                <Link to="/floor-plans"><li className={this.getBackgroundColor('floor-plans' === currentPage)}><p>Floor Plans</p></li></Link>
                <Link to="/elevations"><li className={this.getBackgroundColor('elevations' === currentPage)}><p>Elevations</p></li></Link>
              </div>
              <div className="header-buttons">
                <Link to="/technologies"><li className={this.getBackgroundColor('technologies' === currentPage)}><p>Technologies</p></li></Link>
                <Link to="/windows"><li className={this.getBackgroundColor('windows' === currentPage)}><p>Windows</p></li></Link>
                <Link to="/materials"><li className={this.getBackgroundColor('materials' === currentPage)}><p>Materials</p></li></Link>
              </div>
            </ul>
          </MediaQuery>
        </nav>
        </div>
      </header>
    )
  }
}
