import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ecommerce from './Ecommerce';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
     
   <Ecommerce></Ecommerce>
    </Provider>
    );
}

export default App;
