import axios from "axios";
const ROOT_URL = "http://reduxblog.herokuapp.com/api"
const API_KEY = '?key=PAPERCLIP1234'
export const CREATE_POST = "create_post";
export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    // Action creator.
    // axios request -> request -> payload is request ! 
    // because of the reducer and redux promise we will get 
    // clear responce on that function
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback){
    // post request to API 
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}` , values)
    .then(()=> callback())

    return{
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id){
    // post id
    // getting post
    console.log(`I am trying to fetch ${id}`)
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
        console.log(request)
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {

    console.log(`I am trying to delete ${id}`)
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(()=> callback());
    
    

    return {
        type: DELETE_POST,
        payload: id
    };

}