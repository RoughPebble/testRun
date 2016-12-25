import React, {Component} from 'react'

class Grand extends Component {
  constructor(){
    super()
    this.state = {
      text: 'Sup North Carolina'
    }
  }
  render(){
    return (
      <div>
        <h3>Grand</h3>
        <div>{this.props.parentState}</div>
        <div>{this.props.childState}</div>
        <div>{this.state.text}</div>
      </div>
    )
  }
}

export default Grand
