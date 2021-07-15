import React from 'react'
import { connect } from 'react-redux';
import {AppBar,Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function NavBar(props) {
    // console.log(props.cartProducts);
    let cartCount=0 ;
    let cartProducts=props.Cart.cartProducts;
   for(let i=0;i<cartProducts.length;i++){
       console.log(cartProducts[i].Qty)
       cartCount+=Number(cartProducts[i].Qty);
   }
   console.log(cartCount);
    return (
        <AppBar position="relative" >
        <Toolbar style={{ backgroundColor: "white" }}  style={{backgroundColor:"lightseagreen"}}>
            <Typography><Link className="navtext" to="/" >Home</Link></Typography>
            <Typography style={{color:"blue",marginLeft:"80%"}}><Link className="CartText" to="/cart">Cart</Link></Typography>
            <ShoppingCartIcon></ShoppingCartIcon>
            <Typography style={{color:"blue"}} >{cartCount}</Typography>
        </Toolbar>
      </AppBar>
        
    )
}
const mapStoretoProps=(store)=>{
   return store;
}

export default connect(mapStoretoProps)(NavBar);
{/* <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
            NavBar
            <span style={{ marginLeft: "4rem" }}>{cartCount}</span>
        </div> */}