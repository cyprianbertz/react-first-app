import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Counter extends Component {
    state = { count: 0, };
    incrementCounter = () => this.setState({count: this.state.count + 1});
    decrementCounter = () => this.setState({count: this.state.count - 1});
    resetCounter = () => this.setState({count: 0});
    render() {
        const { count } = this.state;
        return (
            <div>
                <Link to="/posts"><button>Więcej postów</button></Link>
                <div><h2>Stan obecny: {count}</h2></div>
                <button onClick={this.incrementCounter}>+</button>
                <button onClick={this.decrementCounter}>-</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        )
    }
  }
export default Counter;