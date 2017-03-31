import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './home';
import Contact from './contact';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
