'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
//import ArtistApp from './components/ArtistApp';
import ArtistApp from 'ArtistApp';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="dashboard" component={MainContainer}>
        <IndexRoute component={ArtistApp}/>
      </Route>
    </Route>
  </Router>
);
