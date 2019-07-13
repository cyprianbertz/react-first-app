import React, { Component }  from 'react';
import Header from './header.component.js';
import './App.css';
import TextSection from './textsection.components.js';
import Footer from './footer.components.js';
import Counter from './counter.components.js';
import Nav from './nav.components.js';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header title="Mój Blog" subtitle="Lorem ipsum dolor sit amet"/>
      <TextSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Suspendisse fringilla fringilla neque ac laoreet.
          Fusce vel nulla ornare, aliquam ex eget, sollicitudin
          neque. Morbi venenatis rutrum ligula vel scelerisque.
        </p>
      </TextSection>
      <Counter />
      <Footer title="&copy; Copyright " />
    </div>
  );
}



export default App;
