import React, { Component }  from 'react';
import Header from './header.component.js';
import './App.css';
import Footer from './footer.components.js';
import Nav from './nav.components.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Kom from './Kom.js';

class PostDetails extends Component {
    state = { postsList: [] };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
        .then(response => response.json())
        .then(data => this.setState({
        postsList: data,
        }));
       };

       renderId = () => this.state.postsList.id;
       renderTitle = () => this.state.postsList.title;
       renderBody = () => this.state.postsList.body;
       /* renderList = () => this.state.postsList.map((item, index) => <div key={index.id}>Post id: {item.id}. Post title: '{item.title}'</div>) */


    render() {
        return (
            <div className="post2">
                <h1>Id: {this.renderId()}</h1>
                <h1>Title: {this.renderTitle()}</h1>
                <h1>Body:</h1>
                <div className="post">
                    {this.renderBody()}
                </div>
                <Kom />
            </div>
        )
    }
  }

  export default PostDetails;