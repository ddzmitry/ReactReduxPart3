import React, {Component} from 'react';
//connect function to connect between react and the redux
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// grabbinf fetch funciton from actions to fetch data
import {fetchPosts} from '../actions';

import _ from 'lodash';

class Post extends Component {
    renderPost() {
        // this.props.posts array of object

        return _.map(this.props.posts, post => {

            return (

                <li id ={post.id} key={post.id} className="list-group-item">{post.title}

                        <Link className="btn btn-primary" to={`post/${post.id}`}> See full </Link>
                </li>
            )

        })

    }

    componentDidMount() {
        // calling the fuunction  that will fill out props
        // fetcing data
        this
            .props
            .fetchPosts();

    }

    render() {

        return (

            <div>
            <div className="text-xs-right">

                <Link  to="/post/new" className="btn btn-primary">
                    Add a Post
                </Link>
            </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPost()}

                </ul>
            </div>
        )
    }

}
// this funciton will map props from functon to state of the aplication VERY
// Important function
const mapStateToProps = (state) => {
    return {posts: state.posts}
}

// wiring up action creator it is like MapDisopatchToProps here we pass action
// creator we make sure that this funciton is now avaliable in props we can call
// it and it will return us a new state
export default connect(mapStateToProps, {fetchPosts})(Post);
