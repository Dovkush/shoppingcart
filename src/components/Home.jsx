import React from 'react'
import {connect} from "react-redux";
function Home(props) {
    let allproducts=props.allproducts;
    
    return (
        <div>
          {allproducts.map((product)=>{
          return (<div key={product.id}>
            <img src={product.image} style={{ height: "20vw" }} />
            <h2>{product.title}</h2>
            <div>{product.description}</div>
            <h3>{product.price}</h3>
            <button onClick={()=>{
                props.updateCartNo()
            }}>Add to Cart</button>
           </div>) 
          })

          }
        </div>
    )
}
const mapStoretoProps=(store)=>{
    console.log(store);
   return store.Products;
}
const mapDispatchtoProps=(dispatch)=>{
    return {
        updateCartNo:()=>{
            dispatch({type:"update_cartNo"});
        }
    }
}
export default connect(mapStoretoProps,mapDispatchtoProps)(Home);
