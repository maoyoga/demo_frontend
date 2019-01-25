import React, { Component } from 'react';
import axios from 'axios';
class JSONP extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 'test22'
    }
  }
  render() {
    return (
      <div className="App">
        <h2 className="App-title" onClick={this.change}>测试react执行过程, {this.state.a}</h2>
        <h2><input type='button' value='jsonp get获取信息' onClick={this.getJsonpInfo}/></h2>
        <h2><input type='button' value='post请求信息' onClick={this.getJsonpPostInfo}/></h2>
        <h2><input type='button' value='cros获取信息' onClick={this.getNormalInfo}/></h2>
      </div>
    );
  }
  getNormalInfo = () => {
    axios.get('http://localhost:9090/api/jsonp/getinfo').then((res) => {
      console.log(res)
    })
  }
  getJsonpInfo = () => {
    this.request('http://localhost:9090/api/jsonp/getinfo', 'callback').then((res) => {
      console.log(res)
    })
  }
  getJsonpPostInfo = () => {
    this.requestPost('http://localhost:9090/api/jsonp/getinfo', 'callback')
  } 
  //能发post数据，但是怎么回传给客户端？？？
  //1、通过ajax post，依然跨域， 
  //2、iframe拿html内容，iframe跨域，拿不到数据
  requestPost = (url, cbName) => {
    let iframe = document.createElement('iframe')
    iframe.name = 'iframe'
    document.body.appendChild(iframe)
    let form = document.createElement('form')
    form.method = 'post'
    form.target = iframe.name
    form.action = url
    document.body.appendChild(form)
    function submit() {
      form.submit()
      setTimeout(function() {
        //iframe.contentWindow.document.body 跨域iframe拿不到内容。。。
      }, 1000)
      return false
    }
    form.onsubmit = function() {
      submit()
    }()
  }
  request = (url, cbName) => {
    return new Promise((resolve, rejects) => {
      let script = document.createElement('script')
      script.src = `${url}?cb=${cbName}`
      window[cbName] = (res) => {
        document.body.removeChild(script)
        delete window[cbName]
        resolve(res)
      }
      document.body.appendChild(script)
    })
  }
  change = () => {
    this.setState({
      a: 2222
    }, function() {
      debugger
    })
    debugger
    console.log(this.state.a)
  }
}


export default JSONP;
