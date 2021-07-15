

let initialState={
  cartProducts:[],
  currCoupon:"",
  isCouponApplied:false,
}

function cartReducer(state=initialState,action){
  switch(action.type){
      case "update_cartNo":
          let contains;
          let idx;
        for(let i=0;i<state.cartProducts.length;i++){
           if(state.cartProducts[i].product===action.payload.product){
             contains=true;
             state.cartProducts[i].Qty=Number(action.payload.Qty);
           }
        }
        console.log(state.cartProducts);
           return {
             currCoupon:state.currCoupon,
          cartProducts:contains?state.cartProducts:[...state.cartProducts,action.payload],
          isCouponApplied:state.isCouponApplied,
        }
        case "applyCoupon": return{
          currCoupon:action.payload,
          cartProducts:state.cartProducts,
          isCouponApplied:true,
        }
        case "deleteProduct":
        let newcartProducts=state.cartProducts.filter((obj)=>{
               return obj.product!=action.payload;
        })  
        return {
            currCoupon:state.currCoupon,
            cartProducts:newcartProducts,
            isCouponApplied:state.isCouponApplied,
        }
      default: return state;
  }
}

export default cartReducer