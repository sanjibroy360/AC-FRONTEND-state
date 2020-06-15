import React from 'react'
import Button from './components/Button.jsx'
import './style.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  handleIncrement = state => {
    if (this.state.count < 10) {
      this.setState(state => {
        return {
          count: state.count + 1,
        }
      })
    } else {
      alert('MAX_LIMIT : 10')
    }
  }

  handleDecrement = state => {
    if (this.state.count > 0) {
      this.setState(state => {
        return {
          count: state.count - 1,
        }
      })
    } else {
      alert('MIN_LIMIT : 0')
    }
  }

  handleReset = state => {
    this.setState(state => {
      return {
        count: 0,
      }
    })
  }

  render() {
    return (
      <div className="counter_wrapper">
        <h2 className="counter">
          Count: {this.state.count}{' '}
        </h2>
        <Button handleClick={this.handleIncrement}>
          Increment
        </Button>

        <Button handleClick={this.handleDecrement}>
          Decrement
        </Button>

        <Button handleClick={this.handleReset}>
          Reset
        </Button>
      </div>
    )
  }
}

export default App
