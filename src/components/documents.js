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
            <Document cName="odd" big={false} title="Government Agencies Checklist" link="Government_Agencies_Checklist.pdf" />
            <Document cName="even" big={false} title="Zoning Report" link="Zoning_Report.pdf" />
            <Document cName="odd" big={false} title="Study for Flood Hazard Review" link="Study_for_Flood_Hazard_Review.pdf" />
            <Document cName="even" big={false} title="Ventura County Building Code" link="2013_Ventura_County_Building_Code.pdf" />
            <Document cName="odd" big={false} title="Ventura County Non-Coastal Zoning Ordinance" link="Ventura_County_Non_Coastal_Zoning_Ordinance.pdf" />
            <Document cName="even" big={false} title="Ojai Valley Area Plan" link="Ojai_Valley_Area_Plan.pdf" />
            <Document cName="odd" big={false} title="Ventura County Floodplain Development Standards" link="Ventura_County_FLoodplain_Development_Standards.pdf" />
            <Document cName="even" big={false} title="FEMA Technical Bulletin: Crawlspace Construction" link="FEMA_Technical_Bulletin_Crawlspace_Construction.pdf" />
            <Document cName="odd" big={false} title="FEMA Technical Bulletin: Openings in Foundation Walls" link="FEMA_Technical_Bulletin_Openings_In_Foundation_Walls.pdf" />
            <Document cName="even" big={false} title="National Flood Insurance Program Regulations" link="NFIP_Regulations.pdf" />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={670}>
          <div className="documents">
            <Document cName="even" big={true} title="Government Agencies Checklist" link="Government_Agencies_Checklist.pdf" />
            <Document cName="even" big={true} title="Zoning Report" link="Zoning_Report.pdf" />
            <Document cName="even" big={true} title="Study for Flood Hazard Review" link="Study_for_Flood_Hazard_Review.pdf" />
            <Document cName="even" big={true} title="Ventura County Building Code" link="2013_Ventura_County_Building_Code.pdf" />
            <Document cName="even" big={true} title="Ventura County Non-Coastal Zoning Ordinance" link="Ventura_County_Non_Coastal_Zoning_Ordinance.pdf" />
            <Document cName="even" big={true} title="Ojai Valley Area Plan" link="Ojai_Valley_Area_Plan.pdf" />
            <Document cName="even" big={true} title="Ventura County Floodplain Development Standards" link="Ventura_County_FLoodplain_Development_Standards.pdf" />
            <Document cName="even" big={true} title="FEMA Technical Bulletin: Crawlspace Construction" link="FEMA_Technical_Bulletin_Crawlspace_Construction.pdf" />
            <Document cName="even" big={true} title="FEMA Technical Bulletin: Openings in Foundation Walls" link="FEMA_Technical_Bulletin_Openings_In_Foundation_Walls.pdf" />
            <Document cName="even" big={true} title="National Flood Insurance Program Regulations" link="NFIP_Regulations.pdf" />
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
      <a href={`http://satellitehouseojai.com/docs/${props.link}`} download>
        <div className="download">
          { props.big ? <h6>Download</h6> : <h6>&#11015;</h6> }
        </div>
      </a>
    </div>
  )
}
