import React, { Component } from 'react';
class Debounce extends Component {
    constructor(props) {
        super(props);
        window.addEventListener('scroll', this.throttle(
           1000, this.scroll
        ))
        this.state = {
            array: new Array(1000).fill(1)
        }
    }
    
    scroll = () => {
        console.log(new Date().getTime())
    }
    input = (a) => {
        console.log(a.target)
    }
    render() {
        const array = this.state.array
        return array.map((item, index) => {
            return <div><input onChange={
                this.debounce(500, this.input)
            }></input></div>
        })  
    }
    debounce = (time, cb) => {
        var timeout;
        return function() {
            clearTimeout(timeout);
            var context = this, args = arguments
            var args = arguments;
            const a = args[0].target.value
            timeout = setTimeout(function() {
                cb.apply(context, args)
            }, time)
        }
    }

    throttle = (time, cb) => {
        // 解法1
        // var throttleTime;
        // var startTime = new Date();
        // return function() {
        //     clearTimeout(throttleTime)
        //     var curTime = new Date()
        //     console.log(curTime - startTime)
        //     if (curTime - startTime >=  time) {
        //         cb();
        //         startTime = new Date()
        //     }
        // }

        // 解法2
        let canRun = true;
        return function () {
            if (!canRun) return;
            canRun = false;
            setTimeout(() => {
                cb.apply(this, arguments);
                canRun = true;
            }, time);
        };
    }
}

export default Debounce