import React, { Component } from 'react';

class Inherit extends Component {
	constructor(props) {
    super(props)
    this.state = {
		}
  }
	render() {
		return (
			<React.Fragment>
				<h2>继承</h2>
				<h3 onClick={this.demo1}>原型继承</h3>
				<ul>
					<li>确定：</li>
				</ul>
				<h3>借用构造函数继承</h3>
				<h3>组合继承</h3>
				<h3>寄生继承</h3>
			</React.Fragment>
		)
	}
	demo1 = () => {
		function Father() {
			this.name = 'father'
		}

		Father.prototype.run = function() {
			alert( this.name + ' run')
		}

		function Child() {
			this.name = 'child'
		}

		Child.prototype = new Father()

		//重新了
		Child.prototype.run = function() {
			alert('change to childs run')
		}

		var child = new Child()
		child.run()
	}
}

export default Inherit