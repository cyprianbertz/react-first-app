import React, { Component }  from 'react';
import './App.css';
import TextSection from './textsection.components.js';
import Footer from './footer.components.js';
import {BrowserRouter, Route} from 'react-router-dom';

function Post(props) {
    return (
      <div className="post">
          {props.match.params.id}
      </div>
    );
  }

  export default Post;