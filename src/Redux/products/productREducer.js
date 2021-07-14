 import { products } from "../../cartPOC/data";

 let initialState={
     allproducts:products,
 }
function productREducer(state=initialState,action){
    switch(action.type){
        default:return state;
    }
}
export default productREducer;