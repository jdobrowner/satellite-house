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
            <Document cName="odd" big={false} title="Government Agencies Checklist" link="government-agencies-checklist" />
            <Document cName="even" big={false} title="Zoning Report" link="zoning-report" />
            <Document cName="odd" big={false} title="Study for Flood Hazard Review" link="study-for-flood-hazard-review" />
            <Document cName="even" big={false} title="Ventura County Building Code" link="2013-ventura-county-building-code" />
            <Document cName="odd" big={false} title="Ventura County Non-Coastal Zoning Ordinance" link="ventura-county-non-coastal-zoning-ordinance" />
            <Document cName="even" big={false} title="Ojai Valley Area Plan" link="ojai-valley-area-plan" />
            <Document cName="odd" big={false} title="Ventura County Floodplain Development Standards" link="ventura-county-floodplain-development-standards" />
            <Document cName="even" big={false} title="FEMA Technical Bulletin: Crawlspace Construction" link="fema-technical-bulletin-crawlspace-construction" />
            <Document cName="odd" big={false} title="FEMA Technical Bulletin: Openings in Foundation Walls" link="fema-technical-bulletin-openings-in-foundation-walls" />
            <Document cName="even" big={false} title="National Flood Insurance Program Regulations" link="nfip-regulations" />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={670}>
          <div className="documents">
            <Document cName="even" big={true} title="Government Agencies Checklist" link="government-agencies-checklist" />
            <Document cName="even" big={true} title="Zoning Report" link="zoning-report" />
            <Document cName="even" big={true} title="Study for Flood Hazard Review" link="study-for-flood-hazard-review" />
            <Document cName="even" big={true} title="Ventura County Building Code" link="2013-ventura-county-building-code" />
            <Document cName="even" big={true} title="Ventura County Non-Coastal Zoning Ordinance" link="ventura-county-non-coastal-zoning-ordinance" />
            <Document cName="even" big={true} title="Ojai Valley Area Plan" link="ojai-valley-area-plan" />
            <Document cName="even" big={true} title="Ventura County Floodplain Development Standards" link="ventura-county-floodplain-development-standards" />
            <Document cName="even" big={true} title="FEMA Technical Bulletin: Crawlspace Construction" link="fema-technical-bulletin-crawlspace-construction" />
            <Document cName="even" big={true} title="FEMA Technical Bulletin: Openings in Foundation Walls" link="fema-technical-bulletin-openings-in-foundation-walls" />
            <Document cName="even" big={true} title="National Flood Insurance Program Regulations" link="nfip-regulations" />
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
      <a href={`https://www.pdf-archive.com/2017/05/16/${props.link}/${props.link}.pdf`} download>
        <div className="download">
          { props.big ? <h6>Download</h6> : <h6>&#11015;</h6> }
        </div>
      </a>
    </div>
  )
}
