import React , {Component} from 'react';
import { Link } from 'react-router-dom';
// getting our reducers working
import {connect} from 'react-redux';
import {fetchPost , deletePost} from '../actions';

class Post_show extends Component {


    componentDidMount () {

        
        const {id} = this.props.match.params;
        // token of id
        // this.props.match.params.id
        // 128541 working post 
                 console.log('Mounded')
                this.props.fetchPost(id)
            }
  onDeleteClick(){
    const {id} = this.props.match.params;

    // payload goes here ! 
    this.props.deletePost(id, ()=> {

        this.props.history.push('/')
    });

  }          


  render() {
    // after component did call to API We can Acces  all params of it
    const { post } = this.props;

        if(post) {
            return (
                
                        <div>
                            <h3>{post.title}</h3>
                            <h6>Categories : {post.categories }</h6>
                            <p>{post.content}</p>

                            <Link className="btn btn-primary" to="/"> Back Home </Link>
                            <button
                                className =" btn btn-danger pull-xs-right"
                                onClick={this.onDeleteClick.bind(this)}
                            > Remove </button>  
                        </div>
                    )
        }
        else{

            return (<div> Loading.....💩 </div> )
        }

  }


}

// this funciton will map props from functon to state of the aplication VERY
// Important function
// OwnProps is own props of this component
const mapStateToProps = ({ posts }, ownProps ) => {
    // returning only one post we need! 
    return {post: posts[ownProps.match.params.id]}
}
// adding out functions
export default connect(mapStateToProps, {fetchPost , deletePost })(Post_show);
