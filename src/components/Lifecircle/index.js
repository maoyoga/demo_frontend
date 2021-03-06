import React, { Component } from 'react';

class Lifecircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '测试'
        }
        this.handle = this.handle.bind(this);
    }
    static getDerivedStateFromProps(nextProps, state) {
        console.log('----getDerivedStateFromProps----')
        console.log(nextProps, state)
        return {
            nextProps,
            state
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('----getSnapshotBeforeUpdate----')
        return {
            prevProps,
            prevState
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot)
    }
    render() {
        return (
            <React.Fragment>
                <div >React 16 新特性</div>
                <div onClick={() => {this.setState({
                    status: '测试更新'
                })}}> 测试生命周期更新</div>
                <div onClick={this.handle}>测试方法绑定bind</div>
            </React.Fragment>
        ) 
    }
    handle() {
        console.log('测试方法绑定')
    }
}

export default Lifecircle