import React, { Component } from 'react';
import Subtitle from './subtitle';

import heatingCooling from '../../assets/plans/SH-Book_07.png';
import icf from '../../assets/plans/SH-Book_06.png';

export default class Technologies extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.pageChange('technologies');
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="page">

        <Subtitle text="Walls & Roof" />
        <p className="notes">
          The exterior walls and roof are designed for Insulated Concrete Form (ICF) construction. The wall forms (16" in height) will be supplied by an ICF company such as <a href="http://buildblock.com/" target="_blank">Build Block</a> and the roof forms by <a href="http://buildblock.com/products/builddeck-floor-roofing/" target="_blank">Build Deck</a> or <a href="http://www.quadlock.com/ICF-Floors-and-Roofs/quad-deck.htm" target="_blank">Quad-Deck</a>, with solar panels mounted on the roof. Interior walls will be lumber construction.
        </p>
        <div className="floor-plan-container walls">
          <img src={icf} />
        </div>

        <Subtitle text="Heating and Cooling" />
          <p className="notes">
            Heating:  Hydronic radiant floor using tankless electric water heaters, split into 4 zones.
            <br/>
            Cooling:  Multi-split system of 2 ductless and 2 mini duct units.
          </p>
        <div className="floor-plan-container">
          <img src={heatingCooling} />
        </div>

        <br/><br/>
      </div>
    )
  }
}
