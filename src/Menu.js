import React, { Component }  from 'react';
import './App.css';
import Nav from './nav.components.js';
import {BrowserRouter, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
      return (
        <div className="menu" style={{ height: '100%', margin: 'auto', textAlign: 'center', alignItems: 'center',
        justifyContent: 'center', backgroundColor: 'rgb(250, 206, 12)', fontSize: '1.25em', padding: '1.5em' }} >
            <Link style={{ color: "white" }} to="/"><h1>Strona główna<br/></h1></Link>
            <Link style={{ color: "white" }} to="/menu"><h1>Menu<br/></h1></Link>
            <Link style={{ color: "white" }} to="/autor"><h1>Autor<br/></h1></Link>
            <Link style={{ color: "white" }} to="/kontakt"><h1>Kontakt<br/></h1></Link>
            <Link style={{ color: "white" }} to="/posts"><h1>Więcej postów<br/></h1></Link>
        </div>
      )
    }
  }

  export default Menu;