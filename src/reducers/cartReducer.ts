import { Product, ProductsActions, ProductsState } from "../types/products"
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cartActions"
import { UseAddProduct } from "../hooks/UseAddProduct"
import { UseRemoveProduct } from "../hooks/UseRemoveProduct"

const initialState: ProductsState = {
    products: []
}
const cartReducer = (state: ProductsState = initialState, action: ProductsActions): ProductsState => {
    switch (action.type) {
        case ADD_PRODUCT:
            return UseAddProduct(state, action.payload as Product)
        case REMOVE_PRODUCT:
            return UseRemoveProduct(state, action.payload as string)
        default:
            return state;
    }
}


export default cartReducer;