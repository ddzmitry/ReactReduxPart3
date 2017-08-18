// creatind a reducer 
import _ from 'lodash';

import {  FETCH_POSTS } from '../actions/index';

export default function(state = {}, action) {

    switch (action.type) {
        case FETCH_POSTS:
            // console.log(action.payload.data) // array of posts
            return _.mapKeys(action.payload.data, 'id');

            break;
        default:
        return state;
            break;
    }
}