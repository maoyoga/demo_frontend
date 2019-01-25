import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flex from './components/Flex'
import Jsonp from './components/JSONP'
import Home from './home'
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
const routes = [
	{
		component: App,
		routes: [
			{
				path: "/",
				exact: true,
				component: Home
			},
			{
				path: "/flex",
				component: Flex
			},
			{
				path: "/jsonp",
				component: Jsonp
			}
		]
	}
];
ReactDOM.render(
	<BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>,
	document.getElementById('root'));
// registerServiceWorker();
