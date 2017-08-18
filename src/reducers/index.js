import { combineReducers } from 'redux';
import PostReducer from './reducer_post'
// adding form through redux
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  posts: PostReducer,
  // iportant to assign form as form reducer
  form: formReducer
});

export default rootReducer;
