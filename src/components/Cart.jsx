import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Card, CardMedia, Typography, Button, makeStyles, CardContent, CardActions } 
from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';
import CartProduct from './CartProduct';
import CartSummary from './CartSummary';
function Cart(props) {
    let cartProducts = props.cartProducts;
    console.log(cartProducts);
    
    let useStyles = makeStyles({
       
        topCard: {
            marginTop: "5%",
            height: "4rem",
            textAlign: "center",
            width: "50rem"
        },
       
      
    })
    let classes = useStyles();
    let cartCount=0 ;
    console.log(props.cartProducts);
    for(let i=0;i<props.cartProducts.length;i++){
        console.log(props.cartProducts[i])
        cartCount+=Number(props.cartProducts[i].Qty);
    }
    return (
        <div>
            <Card className={classes.topCard}>
                <Typography variant="h4">Shopping Cart</Typography></Card>
            {cartProducts.map((obj) => {
                 let product=obj.product;
                 let Qty=obj.Qty;

                return (
                    <CartProduct obj={obj} updateCartNo={props.updateCartNo}
                     deleteProduct={props.deleteProduct}>
                    </CartProduct>
                )})
            }
            <CartSummary ></CartSummary>
            </div>
    )
}
const mapStoretoProps = (store) => {
    return store.Cart;
}
const mapDispatchtoProps = (dispatch) => {
    return {
        updateCartNo: (product,Qty=1) => {
            dispatch({ type: "update_cartNo" ,payload:{Qty,product}});
        },
        deleteProduct:(product)=>{
            dispatch({type:"deleteProduct",payload:product});
        }
    }
}
export default connect(mapStoretoProps,mapDispatchtoProps)(Cart);
