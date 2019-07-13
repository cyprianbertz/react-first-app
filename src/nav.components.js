import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
      return (
        <div className="navbar">
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.25em', padding: '1.5em' }} to="/">Strona główna  </Link>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.25em', padding: '1.5em' }} to="/menu">  Menu  </Link>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.25em', padding: '1.5em' }} to="/autor">  Autor  </Link>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.25em', padding: '1.5em' }} to="/kontakt">  Kontakt  </Link>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.25em', padding: '1.5em' }} to="/posts">  Więcej postów  </Link>
        </div>
      )
    }
  }
export default Nav;