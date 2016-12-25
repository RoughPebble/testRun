import React, { Component } from 'react';
import './App.css';
import Child from './Child'

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: 'Sup World'
    }
  }
  render() {
    return (
      <div className="App">
        <h3>App</h3>
        {this.state.text}
        <Child parentState={this.state.text}/>
      </div>
    );
  }
}

export default App;
