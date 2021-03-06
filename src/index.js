import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flex from './components/Flex'
import Jsonp from './components/JSONP'
import Inherit from './components/Inherit'
import Home from './home'
import Promise from './components/Promise'
import Debounce from './components/Debounce'
import Lifecircle from './components/Lifecircle'
import Hooks from './components/Hooks'

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
			},
			{
				path: '/inherit',
				component: Inherit
			},
			{
				path: '/promise',
				component: Promise
			},
			{
				path: '/debounce',
				component: Debounce
			},
			{
				path: '/lifecircle',
				component: Lifecircle
			},
			{
				path: '/hooks',
				component: Hooks
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
