import React, { Component } from 'react';

export default class Documents extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.pageChange('documents');
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 60px',
      fontSize: '1.2em'
    }
    return (
      <div className="documents">
        <p>documents Page Under Construction</p>
      </div>
    )
  }
}

const Document = (props) => {
  return (
    <div className="document">
      <div className="document-title">
        <h5>{props.title}</h5>
      </div>
      <a href="link/to/your/download/file" download>
        <div className="download">
          <h6>Download</h6>
        </div>
      </a>
    </div>
  )
}
