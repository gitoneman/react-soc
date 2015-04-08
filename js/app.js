/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var Menu = require('./components/menu/menu.react');
var Dashboard = require('./components/dashboard/dashboard.react');
var Report = require('./components/report/report.react');
var Events = require('./components/events/events.react');
var Event = require('./components/events/components/event.react');
// var Menu = require('./components/menu/menu.react');
// var Menu = require('./components/menu/menu.react');
// var Menu = require('./components/menu/menu.react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
       	<Menu />

        {/* this is the important part */}
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="report" handler={Report}/>
    <Route name="events" handler={Events}>
    	<Route name="event" path=":eventId" handler={Event}/>
    </Route>
    <Route name="dashboard" handler={Dashboard}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

Router.run(routes, function (Handler,state) {
	var params = state.params;
  	React.render(<Handler params={params} />, document.body);
});


