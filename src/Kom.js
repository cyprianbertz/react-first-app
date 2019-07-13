import React, { Component } from 'react';

class Kom extends Component {
    state = { velue: '',}

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        console.log('Form submited: ' + this.state.value);
        event.preventDefault();
    }
         
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
  }
export default Kom;