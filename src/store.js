import { createStore } from "redux";
import productREducer from "./Redux/products/productREducer";
import rootReducer from "./Redux/rootReducer";
const store=createStore(rootReducer);
export default store;