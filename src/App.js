import React, { Component } from 'react';
import './App.css';
import { renderRoutes } from "react-router-config";


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
        <h1>Welcome To Yoga's Home</h1>
        {renderRoutes(this.props.route.routes)}
        <footer>
          contact number: 18606518755
        </footer>
      </div>
    );
  }
  change = () => {
    this.setState({
      a: 22222
    }, function() {
    })
    console.log(this.state.a)
  }
}

export default App;
