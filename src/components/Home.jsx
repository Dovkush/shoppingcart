import React, { useState } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, Button, makeStyles, CardContent, CardActions } from "@material-ui/core";
function Home(props) {
    let allproducts = props.Products.allproducts;
    let cartProducts = props.Cart.cartProducts;

    let useStyles = makeStyles({
        image: {
            height: "13rem",
            width: "10rem",
            marginLeft: "30%",
            marginTop: "10%"
        },
        card: {
            width: "25rem",
            textAlign: "center",
            height: "42rem",
        },
        left: {
            marginLeft: "10%"
        }

    })
    let classes = useStyles();
    return (
        <div style={{ display: "flex", justifyContent: "space-around", }}>
            {allproducts.map((product) => {
                let isDisabled;
                for (let i = 0; i < cartProducts.length; i++) {
                    if (cartProducts[i].product === product) {
                        isDisabled = true;
                    }
                }
                return (<div key={product.id}>
                    <Card outlined className={classes.card}>
                        <CardMedia className={classes.image} image={product.image}></CardMedia>
                        <CardContent >
                            <Typography>{product.title}</Typography>
                            <Typography paragraph style={{ color: "darkgrey" }}>
                                {product.description}</Typography>
                            <h3>{product.price}</h3>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" className={classes.left}
                                onClick={() => { props.viewProduct(product) }}>
                                <Link to="/product" style={{ color: "white", textDecoration: "none" }}>
                                    View Product</Link></Button>
                            <Button key={product.id} variant="contained" color="primary" onClick={(e) => {

                                props.updateCartNo(product)
                            }} disabled={isDisabled} >{isDisabled ? "Added to Cart" : "Add to Cart"}</Button>

                        </CardActions>
                    </Card>
                </div>)
            })

            }
        </div>
    )
}
const mapStoretoProps = (store) => {

    return store;
}
const mapDispatchtoProps = (dispatch) => {
    return {
        updateCartNo: (product, Qty = 1) => {
            dispatch({ type: "update_cartNo", payload: { Qty, product } });
        },
        viewProduct: (product) => {

            dispatch({ type: "select_Product", payload: product })
        }
    }
}
export default connect(mapStoretoProps, mapDispatchtoProps)(Home);
{/* <div key={product.id}>
            <img src={product.image} style={{ height: "20vw" }} />
            <h2>{product.title}</h2>
            <div>{product.description}</div>
            <h3>{product.price}</h3>
            <button onClick={()=>{
                props.updateCartNo()
            }}>Add to Cart</button>
           </div> */}