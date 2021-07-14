import React from 'react'
import { connect } from 'react-redux';
function NavBar(props) {
    let cartCount = props.cartNo;
    return (

        <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
            NavBar
            <span style={{ marginLeft: "4rem" }}>{cartCount}</span>
        </div>
    )
}
const mapStoretoProps=(store)=>{
   return store.Cart;
}

export default connect(mapStoretoProps)(NavBar);