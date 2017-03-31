import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-title">
          <Link to="/">
            <h1>Satellite House</h1><br/>
            <h3>Ojai, Ca</h3>
          </Link>
        </div>
        <nav>
          <ul>
            <Link to="/views"><li>Views</li></Link>
            <Link to="/floor-plans"><li>Floor Plans</li></Link>
            <Link to="/elevations"><li>Elevations</li></Link>
            <Link to="/technologies"><li>Technologies</li></Link>
            <Link to="/materials"><li>Materials</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
        </nav>
      </header>
    )
  }
}
