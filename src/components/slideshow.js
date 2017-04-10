import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

export default class Home extends Component {
  render() {
    var Decorators = [
      {
        component: React.createClass({
          render() {
            return (
              <div>
                <i className="fa fa-long-arrow-left" onClick={this.props.previousSlide} aria-hidden="true"></i>
              </div>
            )
          }
        }),
        position: 'CenterLeft',
        style: {
          left: 20,
          color: '#3d729e',
          fontSize: '1.5em'
        }
      },
      {
        component: React.createClass({
          render() {
            return (
              <div>
                <i className="fa fa-long-arrow-right" onClick={this.props.nextSlide} aria-hidden="true"></i>
              </div>
            )
          }
        }),
        position: 'CenterRight',
        style: {
          right: 20,
          color: '#3d729e',
          fontSize: '1.5em'
        }
      }
    ];
    return (
        <Carousel autoplay={true} autoplayInterval={10000} speed={1000} easing="linear"
          wrapAround={true} decorators={Decorators}>
          {this.props.children}
        </Carousel>
    )
  }
}
