import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Views from './components/views';



export default (
  <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="views" component={Views} />
  <Route path="floor-plans" component={Views} />
  <Route path="elevations" component={Views} />
  <Route path="technologies" component={Views} />
  <Route path="materials" component={Views} />
  <Route path="contact" component={Views} />
  </Route>
);
