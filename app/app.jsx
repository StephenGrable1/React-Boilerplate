'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ArtistApp = require('ArtistApp');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

window.onload = () => {
  ReactDOM.render(
    <ArtistApp/>,document.getElementById('app')
    );
};
