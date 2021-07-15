import React, { useState } from 'react'
import { Card, CardMedia, Typography, Button, makeStyles, CardContent, CardActions, TextField }
    from "@material-ui/core";
import { connect } from 'react-redux';
function CartSummary(props) {
    const [currCode, setCode] = useState("");
    const [disabled, setDisabled] = useState(true);

    let cartProducts = props.Cart.cartProducts;
    let allCoupons = props.Products.coupons;
    let coupon = props.Cart.currCoupon;
    let isCouponApplied = props.Cart.isCouponApplied;

    let cartCount = 0;
    let totalAmount = 0;
    let useStyles = makeStyles({

        SummaryCard: {
            height: "13rem",
            width: "24rem",
            position: "absolute",
            top: "8rem",
            left: "52rem",
            textAlign: "center"
        },
    })
    let classes = useStyles();
    // console.log(props.cartProducts);
    for (let i = 0; i < cartProducts.length; i++) {
        console.log(cartProducts[i])
        cartCount += Number(cartProducts[i].Qty);
        totalAmount += Number((cartProducts[i].product.price) * cartProducts[i].Qty);
    }

    if (coupon != "") {
        totalAmount -= allCoupons[coupon].discount;
    }
    function handleCode(e) {
        if (e.target.value != "") {
            setDisabled(false);
            setCode(e.target.value);
        } else {
            setDisabled(true);
            setCode(e.target.value);
        }
    }
    return (

        <Card className={classes.SummaryCard}>
            <Typography variant="h6">Cart Summary</Typography>
            <Typography>Subtotal ({cartCount}) <Typography style={{ fontWeight: "bolder" }} variant="h6">Rs.{totalAmount}
            </Typography ></Typography>
          
            {isCouponApplied ==true? <Typography variant="h6" style={{ fontWeight: "bolder" }}>Code Applied !</Typography> :
                <>
                <TextField id="standard-search" label="Enter Code" type="search" value={currCode}
                 onChange={(e) => {
                     handleCode(e);
                 }} />
               <Button variant="outlined" disabled={disabled}
                    onClick={() => {
                        console.log(currCode);
                        props.applyCoupn(currCode);
                    }}>Apply</Button>
                    </>

            }

            <Button variant="contained" color="primary"
                style={{ marginTop: "1rem" }}>Proceed to Pay</Button>
           </Card>

    )
}
const mapStoretoProps = (store) => {
    console.log(store);
    return store;
}
const mapDispatchtoProps = (dispatch) => {
    return {
        applyCoupn: (code) => {
            dispatch({ type: "applyCoupon", payload: code })
        }
    }
}
export default connect(mapStoretoProps, mapDispatchtoProps)(CartSummary);
