import React, { Component } from 'react';

class TextSection extends Component {
    render() {
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
  }
export default TextSection;