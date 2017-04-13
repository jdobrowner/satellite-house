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

// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
// function asyncComponent(getComponent) {
//   return class AsyncComponent extends Component {
//     constructor() {
//       super();
//       const Component = null;
//       state = { Component: AsyncComponent.Component };
//     }
//     componentWillMount() {
//       if (!this.state.Component) {
//         getComponent().then(Component => {
//           AsyncComponent.Component = Component
//           this.setState({ Component })
//         })
//       }
//     }
//     render() {
//       const { Component } = this.state
//       if (Component) {
//         return <Component {...this.props} />
//       }
//       return null
//     }
//   }
// }

// const Views = asyncComponent(() =>
//   System.import('./views').then(module => module.default)
// )
// const FloorPlans = asyncComponent(() =>
//   System.import('./floor-plans').then(module => module.default)
// )
// const Elevations = asyncComponent(() =>
//   System.import('./elevations').then(module => module.default)
// )
// const Windows = asyncComponent(() =>
//   System.import('./windows').then(module => module.default)
// )
// const Technologies = asyncComponent(() =>
//   System.import('./technologies').then(module => module.default)
// )

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
            <Route path="/windows" component={Windows} />
            <Route path="/technologies" component={Technologies} />
            <Route path="/views" component={Views} />
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
