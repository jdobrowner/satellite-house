import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import VC_Building_Code from '../../assets/documents/2013_Ventura_County_Building_Code.pdf';
import FEMA_crawlspace from '../../assets/documents/FEMA_Technical_Bulletin_Crawlspace_Construction.pdf';
import FEMA_openings from '../../assets/documents/FEMA_Technical_Bulletin_Openings_In_Foundation_Walls.pdf';
import GA_Checklist from '../../assets/documents/Government_Agencies_Checklist.pdf';
import NFIP_regulations from '../../assets/documents/NFIP_Regulations.pdf';
import OV_area_plan from '../../assets/documents/Ojai_Valley_Area_Plan.pdf';
import study from '../../assets/documents/Study_for_Flood_Hazard_Review.pdf';
import floodplain from '../../assets/documents/Ventura_County_FLoodplain_Development_Standards.pdf';
import non_coastal_zoning from '../../assets/documents/Ventura_County_Non_Coastal_Zoning_Ordinance.pdf';
import zoning_report from '../../assets/documents/Zoning_Report.pdf';
import book from '../../assets/documents/Satellite_House_Ojai_Book.pdf';


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
            <Document cName="even" big={false} title="Satellite House Design Book" link={book}/>
            <Document cName="odd" big={false} title="Government Agencies Checklist" link={GA_Checklist}/>
            <Document cName="even" big={false} title="Zoning Report" link={zoning_report}/>
            <Document cName="odd" big={false} title="Study for Flood Hazard Review" link={study}/>
            <Document cName="even" big={false} title="Ventura County Building Code" link={VC_Building_Code}/>
            <Document cName="odd" big={false} title="Ventura County Non-Coastal Zoning Ordinance" link={non_coastal_zoning}/>
            <Document cName="even" big={false} title="Ojai Valley Area Plan" link={OV_area_plan}/>
            <Document cName="odd" big={false} title="Ventura County Floodplain Development Standards" link={floodplain}/>
            <Document cName="even" big={false} title="FEMA Technical Bulletin: Crawlspace Construction" link={FEMA_crawlspace}/>
            <Document cName="odd" big={false} title="FEMA Technical Bulletin: Openings in Foundation Walls" link={FEMA_openings}/>
            <Document cName="even" big={false} title="National Flood Insurance Program Regulations" link={NFIP_regulations}/>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={670}>
          <div className="documents">
            <Document cName="even" big title="Satellite House Design Book" link={book}/>
            <Document cName="even" big title="Government Agencies Checklist" link={GA_Checklist}/>
            <Document cName="even" big title="Zoning Report" link={zoning_report}/>
            <Document cName="even" big title="Study for Flood Hazard Review" link={study}/>
            <Document cName="even" big title="Ventura County Building Code" link={VC_Building_Code}/>
            <Document cName="even" big title="Ventura County Non-Coastal Zoning Ordinance" link={non_coastal_zoning}/>
            <Document cName="even" big title="Ojai Valley Area Plan" link={OV_area_plan}/>
            <Document cName="even" big title="Ventura County Floodplain Development Standards" link={floodplain}/>
            <Document cName="even" big title="FEMA Technical Bulletin: Crawlspace Construction" link={FEMA_crawlspace}/>
            <Document cName="even" big title="FEMA Technical Bulletin: Openings in Foundation Walls" link={FEMA_openings}/>
            <Document cName="even" big title="National Flood Insurance Program Regulations" link={NFIP_regulations}/>
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
      <a href={props.link} download={`${props.title}.pdf`}>
        <div className="download">
          { props.big ? <h6>Download</h6> : <h6>&#11015;</h6> }
        </div>
      </a>
    </div>
  )
}
