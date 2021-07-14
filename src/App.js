import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ecommerce from './Ecommerce';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/NavBar';

function App() {
  return (
    <Provider store={store}>
    <NavBar></NavBar>  
   <Ecommerce></Ecommerce>
    </Provider>
    );
}

export default App;
