const isFunction = variable => typeof variable === 'function'
class PromiseDemo {
	constructor(handle) {
		if (!isFunction(handle)) {
			console.log('must accept a function')
		}
		this.status = 'PENDING' //FULFILLED, REJECTED
		// 添加成功回调函数队列
		this.fulfilledQueues = []
		// 添加失败回调函数队列
		this.rejectedQueues = []
		try {
			handle(this.resolve, this.reject)
		} catch (error) {
			
		}
	}
	resolve = (value)=> {
		if(this.status !== 'PENDING') return
		this.status = 'FULFILLED'
		this.value = value
		let cb
		while (cb = this.fulfilledQueues.shift()) {
			cb(value)
		}
	}
	reject = (value)=> {
		if(this.status !== 'PENDING') return
		this.status = 'REJECTED'
		this.value = value
		let cb
		while (cb = this.rejectedQueues.shift()) {
			cb(value)
		}
	}
	then = (onFulfilled, onRejected) => {
		const { status } = this

		return new PromiseDemo((onFulfilledNext, onRejectedNext) => {
			let fulfilled = value => {
				try {
					if(!isFunction(onFulfilled)) {
						onFulfilledNext(value)
					} else {
						let res = onFulfilled(value)
						if (res instanceof PromiseDemo) {
							res.then(onFulfilled, onRejectedNext)
						} else {
							onFulfilledNext(res)
						}
					}
				} catch (error) {
					onRejectedNext(error)
				}
			}

			let rejected = value => {
				try {
					if(!isFunction(onRejected)) {
						onRejectedNext(value)
					} else {
						let res = onRejectedNext(value)
						if (res instanceof PromiseDemo) {
							res.then(onFulfilled, onRejectedNext)
						} else {
							onFulfilledNext(res)
						}
					}
				} catch (error) {
					onRejectedNext(error)
				}
			}
			switch (status) {
				case 'PENDING':
					this.fulfilledQueues.push(fulfilled)
					this.rejectedQueues.push(rejected)
					break;
				case 'FULFILLED':
					fulfilled()
					break;
				case 'REJECTED':
					rejected()
					break;
				default:
					break;
			}
		})
	}
}

var promise = new PromiseDemo((resolve, reject)=>{
	setTimeout(function() {
		resolve(2)
	}, 0)
})
promise.then(function(value) {
	console.log(value)
})

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 0);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});


export default PromiseDemo