import React, { Component } from 'react';

export default class Subtitle extends Component {
  render() {
    return (
      <div className='subtitle'>
        <h2>{this.props.text}</h2>
        <div></div>
      </div>
    )
  }
}
