import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './Menu';
import Autor from './Autor';
import Kontakt from './Kontakt';
import Post from './Post';
import Posts from './Posts';
import PostDetails from './PostDetails';


ReactDOM.render(<BrowserRouter>
    <div>
        <Route exact path='/' component={App} />
        <Route path='/menu' component={Menu} />
        <Route path='/autor' component={Autor} />
        <Route path='/kontakt' component={Kontakt} />
        <Route path='/post/:id' component={Post} />
        <Route path='/posts' component={Posts} />
        <Route path='/postdetails/:id' component={PostDetails} />
    </div>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
