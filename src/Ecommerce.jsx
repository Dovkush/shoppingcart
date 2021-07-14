import React from 'react';
import logo from './logo.svg';
import {Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';

import {BrowserRouter} from "react-router-dom";

function Ecommerce() {
    return (
        <BrowserRouter>
        <Switch>
        <Route  path="/cart" component={Cart}></Route>
        <Route  path="/home" component={Product}></Route>
        <Route  path="/" component={Home}></Route>
       </Switch> </BrowserRouter>
    )
}

export default Ecommerce
