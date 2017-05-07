import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Footer = () => {
  return (
    <footer>
      <MediaQuery maxWidth={749}>
        <div className="footer-menu-small1">
          <Link to="/views"><div><p>Views</p></div></Link>
          <Link to="/floor-plans"><p>Floor Plans</p></Link>
          <Link to="/elevations"><p>Elevations</p></Link>
        </div>
        <div className="footer-menu-small2">
          <Link to="/materials"><p>Materials</p></Link>
          <Link to="/technologies"><p>Technologies</p></Link>
          <Link to="/windows"><p>Windows & Doors</p></Link>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={750}>
        <div className="footer-white">
          <div className="footer-menu-big1">
            <Link to="/views"><div><p>Views</p></div></Link>
            <div><p><span className="yellow">|</span></p></div>
            <Link to="/floor-plans"><p>Floor Plans</p></Link>
            <div><p><span className="yellow">|</span></p></div>
            <Link to="/elevations"><p>Elevations</p></Link>
            <div><p><span className="yellow">|</span></p></div>
            <Link to="/technologies"><p>Technologies</p></Link>
            <div><p><span className="yellow">|</span></p></div>
            <Link to="/windows"><p>Windows & Doors</p></Link>
            <div><p><span className="yellow">|</span></p></div>
            <Link to="/materials"><p>Materials</p></Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={749}>
        <div className="footer-grey">
          <div className="footer-menu-small3">
            <div><p>Design by Jason Dobrowner & Wendy Vanguard</p></div>
            <div><p>Drawn by Jason Dobrowner</p></div>
            <div><p>Contact
              <a className="email-me" href="mailto:jdobrowner@gmail.com"><span className="maroon">jdobrowner@gmail.com</span></a>
            </p></div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={750} maxWidth={1000}>
        <div className="footer-grey">
          <div className="footer-menu-medium2">
            <div><p>Design by Jason Dobrowner & Wendy Vanguard</p></div>
            <div className="margin-top-footer">
              <div><p>Drawn by Jason Dobrowner</p></div>
              <div><p><span className="orange span-padding">|</span></p></div>
              <div><p>Contact
                <a className="email-me" href="mailto:jdobrowner@gmail.com"><span className="maroon">jdobrowner@gmail.com</span></a>
              </p></div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1000}>
        <div className="footer-grey">
          <div className="footer-menu-big2">
            <div><p>Design by Jason Dobrowner & Wendy Vanguard</p></div>
            <div><p><span className="orange">|</span></p></div>
            <div><p>Drawn by Jason Dobrowner</p></div>
            <div><p><span className="orange">|</span></p></div>
            <div><p>Contact
              <a className="email-me" href="mailto:jdobrowner@gmail.com"><span className="maroon">jdobrowner@gmail.com</span></a>
            </p></div>
          </div>
        </div>
      </MediaQuery>
      <div>

      </div>
    </footer>
  )
}

export default Footer;
