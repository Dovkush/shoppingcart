import { combineReducers } from "redux";
import productREducer from "./products/productREducer";
import cartReducers from "./cart/cartReducer";
import currProductReducer from "./product/currProductReducer";

let rootReducer=combineReducers({
    Products:productREducer,
    Cart:cartReducers,
    CurrentProduct:currProductReducer,
})
export default rootReducer;