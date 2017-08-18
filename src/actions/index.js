import axios from "axios";
const ROOT_URL = "http://reduxblog.herokuapp.com/api"
const API_KEY = '?key=PAPERCLIP1234'
export const CREATE_POST = "create_post";
export const FETCH_POSTS = "fetch_posts";
export function fetchPost() {
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