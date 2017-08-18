import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import  Post_index from './components/post_index'
import Posts_new from './components/posts_new'
// BR I want React look entire URL to tell what to show ! 
// Route React component that could be rendered inside of ANY components.

//2 We import promise from react promise and apply it to middlewere 
import promise from 'redux-promise'
import { BrowserRouter , Route , Switch } from 'react-router-dom'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// we have to use Switch and it has to be detailed inheritant
// React V4 
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
          <Route path="/post/new" component={Posts_new} />  
           <Route path="/" component={Post_index} />  
          </Switch>
      </div>
      </BrowserRouter>
  </Provider>


  , document.querySelector('.container'));
