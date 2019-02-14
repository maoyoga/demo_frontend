import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import './index.css'
class Home extends Component {
  render() {
		return (
			<div className='home'>
				<div className='left'>
					<div><Link to="/jsonp">JSONP</Link></div>
					<div><Link to="/flex">flex布局</Link></div>
					<div><Link to="/inherit">继承</Link></div>
					<div><Link to="/promise">promise</Link></div>
				</div>
				<div className='middle'>11</div>
				<div className='right'>ss</div>
			</div>
		)
	}
}

export default Home