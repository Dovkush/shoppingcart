 import { products,coupons } from "../../cartPOC/data";

 let initialState={
     allproducts:products,
     coupons:coupons,
 }
function productREducer(state=initialState,action){
    switch(action.type){
        default:return state;
    }
}
export default productREducer;