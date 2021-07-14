import { combineReducers } from "redux";
import productREducer from "./products/productREducer";
import cartReducers from "./cart/cartReducer";

let rootReducer=combineReducers({
    Products:productREducer,
    Cart:cartReducers,
})
export default rootReducer;