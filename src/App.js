import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JSONP from './demo/jsonp.js'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 'test'
    }
  }
  render() {
    return (
      <div className="App">
        <JSONP></JSONP>
      </div>
    );
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

export default App;
