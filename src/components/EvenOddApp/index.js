import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'odd'

    return (
      <div className="bg-container">
        <h1 className="title">Count {count}</h1>
        <p className="sub-title">Count is {text}</p>
        <button
          className="increment-button"
          type="button"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
