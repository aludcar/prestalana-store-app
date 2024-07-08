import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
    productsReducer,
    cartReducer,
    favoritesReducer,
    authReducer
})

export default rootReducers;