// creatind a reducer 
import _ from 'lodash';

import {  FETCH_POSTS , FETCH_POST } from '../actions/index';

export default function(state = {}, action) {

    switch (action.type) {
        case FETCH_POSTS:
            // console.log(action.payload.data) // array of posts
            return _.mapKeys(action.payload.data, 'id');

            break;

        case FETCH_POST:
            // ES 
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            //     return newState;
            // ES 6 Key interpolation make a key as an ID and set value of the object to it! 
            return {...state, [action.payload.data.id]: action.payload.data};
            break;

        default:
        return state;
            break;
    }
}