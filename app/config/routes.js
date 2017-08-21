import React from "react";

import {
  BrowserRouter as Router,
  hashHistory,
  Route,
  Link
} from 'react-router-dom';

// var React = require("react");
// var router = require("react-router");

// Include the Route component for displaying individual routes
// var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
// var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

import Main from "../components/Main";
import Search from "../components/children/Search";
import Saved from "../components/children/Saved";

// var Main = require("../components/Main");
// var Search = require("../components/children/Search");
// var Saved = require("../components/children/Saved");

// Export the Routes
module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Search />
			
		</Route>
	</Router>
);
