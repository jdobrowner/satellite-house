import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

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
      <div>
        <MediaQuery maxWidth={669}>
          <div className="documents">
            <Document cName="odd" big={false} title="Government Agencies Checklist" link="Government%20Agencies%20Checklist.pdf" />
            <Document cName="even" big={false} title="Zoning Report" link="Zoning%20Report.pdf" />
            <Document cName="odd" big={false} title="Study for Flood Hazard Review" link="Study%20for%20Flood%20Hazard%20Review.pdf" />
            <Document cName="even" big={false} title="Ventura County Building Code" link="2013%20Ventura%20County%20Building%20Code.pdf" />
            <Document cName="odd" big={false} title="Ventura County Non-Coastal Zoning Ordinance" link="Ventura%20County%20Non%20Coastal%20Zoning%20Ordinance.pdf" />
            <Document cName="even" big={false} title="Ojai Valley Area Plan" link="Ojai%20Valley%20Area%20Plan.pdf" />
            <Document cName="odd" big={false} title="Ventura County Floodplain Development Standards" link="Ventura%20County%20FLoodplain%20Development%20Standards.pdf" />
            <Document cName="even" big={false} title="FEMA Technical Bulletin: Crawlspace Construction" link="FEMA%20Technical%20Bulletin%20Crawlspace%20Construction.pdf" />
            <Document cName="odd" big={false} title="FEMA Technical Bulletin: Openings in Foundation Walls" link="FEMA%20Technical%20Bulletin%20Openings%20In%20Foundation%20Walls.pdf" />
            <Document cName="even" big={false} title="National Flood Insurance Program Regulations" link="NFIP%20Regulations.pdf" />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={670}>
          <div className="documents">
            <Document cName="even" big={true} title="Government Agencies Checklist" link="Government%20Agencies%20Checklist.pdf" />
            <Document cName="even" big={true} title="Zoning Report" link="Zoning%20Report.pdf" />
            <Document cName="even" big={true} title="Study for Flood Hazard Review" link="Study%20for%20Flood%20Hazard%20Review.pdf" />
            <Document cName="even" big={true} title="Ventura County Building Code" link="2013%20Ventura%20County%20Building%20Code.pdf" />
            <Document cName="even" big={true} title="Ventura County Non-Coastal Zoning Ordinance" link="Ventura%20County%20Non%20Coastal%20Zoning%20Ordinance.pdf" />
            <Document cName="even" big={true} title="Ojai Valley Area Plan" link="Ojai%20Valley%20Area%20Plan.pdf" />
            <Document cName="even" big={true} title="Ventura County Floodplain Development Standards" link="Ventura%20County%20FLoodplain%20Development%20Standards.pdf" />
            <Document cName="even" big={true} title="FEMA Technical Bulletin: Crawlspace Construction" link="FEMA%20Technical%20Bulletin%20Crawlspace%20Construction.pdf" />
            <Document cName="even" big={true} title="FEMA Technical Bulletin: Openings in Foundation Walls" link="FEMA%20Technical%20Bulletin%20Openings%20In%20Foundation%20Walls.pdf" />
            <Document cName="even" big={true} title="National Flood Insurance Program Regulations" link="NFIP%20Regulations.pdf" />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

const Document = (props) => {
  return (
    <div className={`document ${props.cName}`}>
      <div className="document-title">
        <h5>{props.title}</h5>
      </div>
      <a href={`https://github.com/jdobrowner/satellite-house/blob/master/assets/documents/${props.link}`} download>
        <div className="download">
          { props.big ? <h6>Download</h6> : <h6>&#11015;</h6> }
        </div>
      </a>
    </div>
  )
}
