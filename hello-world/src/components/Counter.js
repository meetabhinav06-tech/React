import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        count: 0
        }
    }
  render() {
    return (
      <div>
        count - {this.state.count}
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Increment     </button>
      </div>
    )
  }
}

export default Counter
