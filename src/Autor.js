import React, { Component }  from 'react';
import Header from './header.component.js';
import './App.css';
import TextSection from './textsection.components.js';
import Footer from './footer.components.js';
import Counter from './counter.components.js';
import Nav from './nav.components.js';
import {BrowserRouter, Route} from 'react-router-dom';

function Autor() {
    return (
      <div className="App">
        <Nav title="Strona głowna" />
        <Header title="Mój Blog" subtitle="Lorem ipsum dolor sit amet"/>
        <div className="Autor" style={{ display: 'inline' }}>
          <div className="post">
          </div>
        </div>
        <Footer title="&copy; Copyright " />
      </div>
    );
  }

  export default Autor;