import { CardMedia,Card, makeStyles, CardContent, Typography ,Button,CardActions} from '@material-ui/core';
import React from 'react'
import {connect} from "react-redux";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Product(props) {
    console.log(props.CurrentProduct);
    let product=props.CurrentProduct.currProduct;
    let cartProducts = props.Cart.cartProducts;
    let isDisabled;
    for (let i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].product === product) {
            isDisabled = true;
        }
    }
    let useStyles=makeStyles({
        card:{
            marginTop:"4rem",
            marginLeft:"4rem",
            display:"flex",
            justifyContent:"space-around"
        },
        image:{
            height:"25rem",
            width:"16rem",
        },
        title:{
          fontWeight:"bolder",
        },
        price:{
            color:"darkgrey",
        },
        top:{
           marginTop:"1.5rem"
        },
        Description:{
            width:"40rem",
        },
        button:{
            position:"absolute",
            top:"28rem",
            left:"34rem"
        }
    })
    let classes=useStyles();
    return (
        <div>
        {product==""?<h1>Product Not Selected</h1>:<>
        <Card className={classes.card}>
            <CardMedia image={product.image} className={classes.image}></CardMedia>
            <CardContent>
             <Typography variant ="h5" className={classes.title}>{product.title}</Typography>
             <Typography className={[classes.price,classes.top]}>"M.R.P." <span style={{color:"red"}}>
                 Rs.{product.price}</span></Typography>
             <Typography className={classes.top}>Description</Typography>
             <Typography paragraph className={[classes.top,classes.Description]}>{product.description}</Typography>
            </CardContent>
            <CardActions className={classes.button}>
               
                <Button variant="contained" color="primary" endIcon={<ShoppingCartIcon></ShoppingCartIcon>}
                onClick={()=>{
                    props.updateCartNo(product)
                }} disabled={isDisabled}>{isDisabled ? "Added to Cart" : "Add to Cart"}</Button>
            </CardActions>
            
        </Card>
        </>}
        </div>
    )
}
const mapPropstoStore=(store)=>{
    return store;
}
const mapDispatchtoProps=(dispatch)=>{
    return {
        updateCartNo:(product,Qty=1)=>{
          dispatch({type:"update_cartNo",payload:{Qty,product}})
        }
    }
}
export default connect(mapPropstoStore,mapDispatchtoProps)(Product);
{/* <div key={product.id}>
            <img src={product.image} style={{ height: "20vw" }} />
            <h2>{product.title}</h2>
            <div>{product.description}</div>
            <h3>{product.price}</h3>
            <button onClick={()=>{
                props.updateCartNo()
            }}>Add to Cart</button>
           </div>  */}