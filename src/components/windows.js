import React, { Component } from 'react';
import Subtitle from './subtitle';

import windowFP from '../../assets/plans/SH-Book_08.png';
import details from '../../assets/plans/SH-Book_10.png';

export default class Windows extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.pageChange('windows');
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="page windows">

        <Subtitle text="Windows & Doors" />
        <div className="floor-plan-container">
          <img src={windowFP} />
        </div>

        <Subtitle text="Details" />
        <div className="window-detail-container">
          <img src={details} />
        </div>

        <Subtitle text="Schedules" />
        <br/>
        <table>
          <thead>
            <tr className="windows-table-header">
              <td className="small-data">Label</td>
              <td className="small-data">Quantity</td>
              <td className="small-data">Width</td>
              <td className="small-data">Height</td>
              <td className="type-data">Type</td>
              <td className="room-data">Room</td>
            </tr>
          </thead>
          <tbody>
            <tr className="windows-table-odd">
              <td>A</td>
              <td>1</td>
              <td>112"</td>
              <td>32"</td>
              <td>Bi-Fold - Western Series 9500</td>
              <td>Kitchen</td>
            </tr>
            <tr className="windows-table-even">
              <td>B</td>
              <td>5</td>
              <td>96"</td>
              <td>32"</td>
              <td>Casement - Western Series 670</td>
              <td>Bed 1 (2), Bed 2, Studio 1, Studio 2</td>
            </tr>
            <tr className="windows-table-odd">
              <td>C</td>
              <td>3</td>
              <td>32"</td>
              <td>32"</td>
              <td>Casement - Western Series 670</td>
              <td>Bath 2 (2), Bath 1</td>
            </tr>
            <tr className="windows-table-even">
              <td>D</td>
              <td>1</td>
              <td>64"</td>
              <td>48"</td>
              <td>Casement - Western Series 670</td>
              <td>Bed 1</td>
            </tr>
            <tr className="windows-table-odd">
              <td>E</td>
              <td>1</td>
              <td>64"</td>
              <td>48"</td>
              <td>Casement - Western Series 670</td>
              <td>Bath 1</td>
            </tr>
            <tr className="windows-table-even">
              <td>F</td>
              <td>1</td>
              <td>64"</td>
              <td>32"</td>
              <td>Casement - Western Series 670</td>
              <td>Kitchen</td>
            </tr>
            <tr className="windows-table-odd">
              <td>G</td>
              <td>1</td>
              <td>42"</td>
              <td>32"</td>
              <td>Awning - Western Series 670</td>
              <td>Great Room</td>
            </tr>
            <tr className="windows-table-even">
              <td>H</td>
              <td>1</td>
              <td>42"</td>
              <td>80"</td>
              <td>Combo: Western Series 670 Casement and Series 600 Fixed</td>
              <td>Hallway</td>
            </tr>
            <tr className="windows-table-odd">
              <td>I</td>
              <td>2</td>
              <td>16"</td>
              <td>32"</td>
              <td>Casement - Western Series 670</td>
              <td>Bath 2, Studio 2</td>
            </tr>
            <tr className="windows-table-even">
              <td>J</td>
              <td>1</td>
              <td>84"</td>
              <td>96"</td>
              <td>Window Wall - Western Series 600</td>
              <td>Bridge</td>
            </tr>
            <tr className="windows-table-odd">
              <td>K</td>
              <td>1</td>
              <td>108"</td>
              <td>96"</td>
              <td>Window Wall - Western Series 600</td>
              <td>Bridge</td>
            </tr>
            <tr className="windows-table-even">
              <td>L</td>
              <td>1</td>
              <td>112"</td>
              <td>96"</td>
              <td>Combo: Western Series 670 Casement and Series 600 Fixed</td>
              <td>Studio 2</td>
            </tr>
            <tr className="windows-table-odd">
              <td>M</td>
              <td>1</td>
              <td>160"</td>
              <td>80"</td>
              <td>Window Wall - Western Series 600</td>
              <td>Great Room</td>
            </tr>
            <tr className="windows-table-even">
              <td>N</td>
              <td>1</td>
              <td>34"</td>
              <td>80"</td>
              <td>Combo: Western Series 670 Casement and Series 600 Fixed</td>
              <td>Great Room</td>
            </tr>
          </tbody>
        </table>

        <br/><br/>

        <table>
          <thead>
            <tr className="doors-table-header">
              <td className="small-data">Label</td>
              <td className="small-data">Quantity</td>
              <td className="small-data">Width</td>
              <td className="small-data">Height</td>
              <td className="type-data">Type</td>
              <td className="room-data">Room</td>
            </tr>
          </thead>
          <tbody>
            <tr className="doors-table-odd">
              <td>a</td>
              <td>3</td>
              <td>80"</td>
              <td>80"</td>
              <td>Sliding Glass Door - Western Series 600</td>
              <td>Studio 1, Studio 2, Hallway</td>
            </tr>
            <tr className="doors-table-even">
              <td>b</td>
              <td>1</td>
              <td>42"</td>
              <td>80"</td>
              <td>Hinged Glass Door - Western Series 900</td>
              <td>Great Room</td>
            </tr>
            <tr className="doors-table-odd">
              <td>c</td>
              <td>1</td>
              <td>96"</td>
              <td>96"</td>
              <td>Bi-Fold Glass Door - Western Series 9500</td>
              <td>Great Room</td>
            </tr>
            <tr className="doors-table-even">
              <td>d</td>
              <td>1</td>
              <td>42"</td>
              <td>80"</td>
              <td>Steelcraft L-Series - Level 2</td>
              <td>Hallway</td>
            </tr>
            <tr className="doors-table-odd">
              <td>e</td>
              <td>1</td>
              <td>42"</td>
              <td>84"</td>
              <td>Steelcraft L-Series - Level 2</td>
              <td>Garage</td>
            </tr>
            <tr className="doors-table-even">
              <td>f</td>
              <td>3</td>
              <td>30"</td>
              <td>80"</td>
              <td>Interior Pocket Door</td>
              <td>Bed 1, Bath 2 (Double Pocket)</td>
            </tr>
            <tr className="doors-table-odd">
              <td>g</td>
              <td>1</td>
              <td>36"</td>
              <td>80"</td>
              <td>Interior Pocket Door</td>
              <td>Bed 1</td>
            </tr>
            <tr className="doors-table-even">
              <td>h</td>
              <td>1</td>
              <td>36"</td>
              <td>80"</td>
              <td>Interior Hinged Door</td>
              <td>Bath 2</td>
            </tr>
            <tr className="doors-table-odd">
              <td>i</td>
              <td>1</td>
              <td>192"</td>
              <td>84"</td>
              <td>Garage Door</td>
              <td>Garage</td>
            </tr>
          </tbody>
        </table>
        <br/><br/><br/>
      </div>
    )
  }
}
