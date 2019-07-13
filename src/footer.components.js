import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
        <div class="footer">
            <h2>{this.props.title}{(new Date().getFullYear())}</h2>
        </div>
      )
    }
  }
export default Footer;