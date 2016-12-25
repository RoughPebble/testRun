import React, {Component} from 'react'
import Grand from './Grand'
class Child extends Component {
  constructor(){
    super()
    this.state = {
      text: 'Sup America'
    }
  }
  render(){
    return (
      <div>
        <h3>Child</h3>
        <div>{this.props.parentState}</div>
        <div>{this.state.text}</div>
        <Grand parentState={this.props.parentState} childState={this.state.text}/>
      </div>
    )
  }
}

export default Child
