import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './header';
import Home from './home';
import Materials from './materials';
import Elevations from './elevations';
import FloorPlans from './floor-plans';
import Windows from './windows';
import Technologies from './technologies';
import Views from './views';
import Footer from './footer';

class App extends Component {
  constructor() {
    super();
    this.state = { page: 'home' };
    this.pageChange = this.pageChange.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.page !== this.state.page) return true;
    return false;
  }
  pageChange(page) {
    this.setState({ page });
  }
  render() {
    return (
        <BrowserRouter>
          <div className="app">
            <Header currentPage={this.state.page} pageChange={this.pageChange}/>
            <div className="routes">
              <Route exact path="/" component={ ()=> <Home pageChange={this.pageChange}/> }/>
              <Route path="/materials" component={ ()=> <Materials pageChange={this.pageChange}/> } />
              <Route path="/elevations" component={ ()=> <Elevations pageChange={this.pageChange}/> } />
              <Route path="/floor-plans" component={ ()=> <FloorPlans pageChange={this.pageChange}/> } />
              <Route path="/windows" component={ ()=> <Windows pageChange={this.pageChange}/> } />
              <Route path="/technologies" component={ ()=> <Technologies pageChange={this.pageChange}/> } />
              <Route path="/views" component={ ()=> <Views pageChange={this.pageChange}/> } />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
