import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './header';
import Home from './home';
import Contact from './contact';
import Elevations from './elevations';
import FloorPlans from './floor-plans';
import Windows from './windows';
import Technologies from './technologies';
import Views from './views';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <BrowserRouter>
          <div className="app">
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact} />
            <Route path="/elevations" component={Elevations} />
            <Route path="/floor-plans" component={FloorPlans} />
            <Route path="/materials" component={Windows} />
            <Route path="/technologies" component={Technologies} />
            <Route path="/views" component={Views} />
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
