import React ,{useState}from 'react'
import { Card, CardMedia, Typography, Button, makeStyles, CardContent, CardActions } 
from "@material-ui/core";

import DeleteIcon from '@material-ui/icons/Delete';
function CartProduct(props) {
    const [value,setValue]=useState(props.obj.Qty);

    let useStyles = makeStyles({
        image: {
            height: "20rem",
            width: "14rem",
        },
        topCard: {
            marginTop: "5%",
            height: "4rem",
            textAlign: "center",
            width: "50rem"
        },
        input: {
            width: "3rem",
            marginLeft: "3px",
            marginTop: "1rem",
        },
        descp: {
            width: "30rem",
            marginTop: "1rem",
        },
        button: {
            backgroundColor: "red",
        },
        SummaryCard: {
            height: "12rem",
            width: "24rem",
            position: "absolute",
            top: "8rem",
            left: "52rem",
            textAlign: "center"
        },
    })
    let classes = useStyles();
    let {product,Qty}=props.obj;
    return (
        <div>
                 <Card style={{ display: "flex", marginTop: "0.2rem", width: "50rem" }}>
                         <CardMedia className={classes.image} image={product.image}></CardMedia>
                         <CardContent>
                             <Typography variant="h6">{product.title}</Typography>
                            
                            <Typography>Qty<input className={[classes.input]} type="number"
                              min="1" value={value}
                             onChange={(e)=>{ 
                                setValue(e.target.value);
                                 console.log(e.target.value);
                             props.updateCartNo(product,e.target.value)}}>
                                 </input></Typography>
                           
                             <Typography paragraph className={classes.descp}>{product.description}
                             </Typography>
                           
                             <Button color="secondary" variant="contained" 
                             startIcon={<DeleteIcon></DeleteIcon>}
                             onClick={(e)=>{
                                 props.deleteProduct(product)
                             }}
                             >Delete</Button>
                             <Typography variant="button" style={{
                                 fontWeight: "bolder",
                             marginLeft: "1rem",
                           }}>
                                 Rs.{product.price}</Typography>
                         </CardContent>
                     </Card>
                 
        </div>
    )
}

export default CartProduct


