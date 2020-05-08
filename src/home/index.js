import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Lifecircle from '../components/Lifecircle'

import './index.css'
class Home extends Component {
	constructor() {
		super();
		const test = new Lifecircle();
		debugger
		console.log(test);
	}
  render() {
		return (
			<div className='home'>
				<div className='left'>
					<div><Link to="/jsonp">JSONP</Link></div>
					<div><Link to="/flex">flex布局</Link></div>
					<div><Link to="/inherit">继承</Link></div>
					<div><Link to="/promise">promise</Link></div>
					<div><Link to="/debounce">防抖和节流</Link></div>
					<div><Link to="/lifecircle">react16生命周期</Link></div>
					<div><Link to="/hooks">react hooks</Link></div>
				</div>
				<div className='middle'>11</div>
				<div className='right'>ss</div>
			</div>
		)
	}
}

export default Home