import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
    state = { postsList: [] };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({
        postsList: data,
        }));
       };

       renderList = () => this.state.postsList.map((item, index) => <Link style={{ display: "block" }} key={index.id} to={`/postdetails/${item.id}` }>{item.title}</Link>); 
       /* renderList = () => this.state.postsList.map((item, index) => <div key={index.id}>Post id: {item.id}. Post title: '{item.title}'</div>) */


    render() {
        return (
            <div>
               {this.renderList()}
            </div>
        )
    }
  }
export default PostList;