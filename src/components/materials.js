import React, { Component } from 'react';

export default class Contact extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.pageChange('materials');
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 60px'
    }
    return (
      <div style={style}><p>Materials Page Under Construction</p></div>
    )
  }
}
