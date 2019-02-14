import React, { Component } from 'react';
import { checkServerIdentity } from 'tls';

class Inherit extends Component {
	constructor(props) {
    super(props)
    this.state = {
		}
		console.log(this)
  }
	render() {
		return (
			<React.Fragment>
				<h2>继承</h2>
				<h3 >原型继承</h3>
				<ul>
					<li>
						<p>缺点：</p>
						<p>会创建一个关联到 Bar.prototype 的新对象，如果函数Foo增加一些数据属性等，会影响后代Bar</p>
						<p>无法向父类传递参数</p>
					</li>
					<li>核心： Bar.prototype = new Foo()</li>
					<li onClick={this.demo1}>
						<p>实践：1、子类重写父类方法2、子类重写父类方法后，实力化父类并执行run方法</p>
					</li>
					<li>
						<p>错误方式：Bar.prototype = Foo.prototype</p>
						<p>Bar.prototype 直接引用 Foo.prototype 对象,会直接修改Foo.prototype本身</p>
					</li>
				</ul>
				<h3>借用构造函数继承</h3>
				<ul>
					<li>
						<p>缺点：</p>
						<p>由于方法都在父类的构造函数中创建，所以父类得方法不能复用</p>
					</li>
					<li>核心：把父类的实例属性复制了一份给子类实例装上了</li>
					<li onClick={this.demo2}>实践：子类向父类构造函数传递参数</li>
					
				</ul>
				<h3>组合继承</h3>
				<ul>
					<li>
						<p>缺点：</p>
						<p>调用了2次父类的构造方法，会存在一份多余的父类实例属性</p>
						<p>子类constructor指向了Father,需要Child.prototype.constructor = Child</p>
					</li>
					<li onClick={this.demo3}>实践</li>
				</ul>
				<h3>寄生继承</h3>
				<ul>
					<li>
						<p>优点：切断了父类原型上多余的属性</p>
					</li>
					<li onClick={this.demo4}>实践：1、通过beget方法切断了父类原型上多余的属性 2、通过Object.create方法继承，原理与beget一致</li>
				</ul>
				<h2>延伸</h2>
				<h3>new的过程</h3>
				<ul>
					<li>创造一个全新的对象</li>
					<li>将对象的_prop_指向构造函数的prototype, obj.__proto__ = Func.prototype</li>
					<li>将构造函数Func的this指向了（绑定到）obj，let result = Func.call(obj)</li>
					<li>自动返回这个新对象</li>
				</ul>
				<h2><a target='_blank' href='https://segmentfault.com/a/1190000015216289'>参考文章</a></h2>
			</React.Fragment>
		)
	}

	demo1=() => {

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

		var child = new Child()
		child.run()

		//重写了父类的run方法
		Child.prototype.run = function() {
			alert('change to childs run')
		}
		child.run()

		var father = new Father()
		father.run()
	
	}

	demo2=() => {
		function Father(a, b) {
			this.a = a
			this.b = b
			this.run = ()=> {
				alert(this.a)
				alert(this.b)
			}
		}

		function Child(a, b) {
			Father.call(this, a, b)
		}
		const child = new Child(1, 2)
		child.run()
	}

	demo3 = () => {
		function Father(a, b) {
			this.a = a;
			this.b = b
		}
		Father.prototype.run = function() {
			alert(this.a)
			alert(this.b)
		}

		function Child(a, b) {
			Father.call(this, a, b)
		}
		Child.prototype = new Father()

		const child = new Child(1,2)
		const father = new Father()
		child.run()
		console.log(child.constructor) // Father
		Child.prototype.constructor = Child
		console.log(child.constructor) //Child
		console.log(father.constructor) //Father
	}

	demo4 = () => {
		function beget(obj) {
			var F = function() {}
			F.prototype = obj.prototype
			return new F()
		}
		function Father(a, b) {
			this.a = a;
			this.b = b
		}
		Father.prototype.run = function() {
			console.log(this.a)
			console.log(this.b)
		}

		function Child(a, b) {
			Father.call(this, a, b)
		}
		function Child2(a, b) {
			Father.call(this, a, b)
		}
		Child.prototype = beget(Father)
		Child2.prototype = Object.create(Father.prototype)
		const father = new Father()
		const child = new Child(4, 5)
		const child2 = new Child2(7, 8)
		child.run()
		child2.run()
		Child.prototype.constructor = Child
		console.log('child.constructor' ,child.constructor) //Father
		console.log('child.__proto__', child.__proto__)
		console.log(father.constructor) //Father
	}
}

/**  每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

*/

class A {
}

class B extends A {
	
}
console.log(B.__proto__ === A )
console.log(A.constructor )
// true
console.log(B.prototype.__proto__ === A.prototype) // true

export default Inherit