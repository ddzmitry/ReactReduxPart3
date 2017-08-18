import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import  Post_index from './components/post_index'
import Posts_new from './components/Posts_new'
// BR I want React look entire URL to tell what to show ! 
// Route React component that could be rendered inside of ANY components.

//2 We import promise from react promise and apply it to middlewere 
import promise from 'redux-promise'
import { BrowserRouter , Route } from 'react-router-dom'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
        <Route path="/" component={Post_index} />  
        <Route path="/post/new" component={Posts_new} />  
      </div>
      </BrowserRouter>
  </Provider>


  , document.querySelector('.container'));
