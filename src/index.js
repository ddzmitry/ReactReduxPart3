import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
// BR I want React look entire URL to tell what to show ! 
// Route React component that could be rendered inside of ANY components.

import { BrowserRouter , Route } from 'react-router-dom'
const createStoreWithMiddleware = applyMiddleware()(createStore);
class Hello extends React.Component{

  render(){
    return(<div> Hello! World</div>)
  }
}

class Bye extends React.Component{
  
    render(){
      return(<div> Good Bye!  </div>)
    }
  }
ReactDOM.render(


  <Provider store={createStoreWithMiddleware(reducers)}>

      <BrowserRouter>
        <div>
        <h1>HEADER</h1>
      <Route path={'/hello'} component = {Hello}/>
      <Route path={'/exit'} component = {Bye}/>
      </div>
      </BrowserRouter>
  </Provider>


  , document.querySelector('.container'));
