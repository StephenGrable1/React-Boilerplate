'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';


export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="dashboard" component={}>
        <IndexRoute component={}/>
      </Route>
    </Route>
  </Router>
);
