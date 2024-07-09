import { UseAddProduct } from "../hooks/UseAddProduct";
import { UseRemoveProduct } from "../hooks/UseRemoveProduct";
import { ProductsState, Product, ProductsActions } from "../types/products";
import { ADD_FAVORITE_PRODUCT, POPULATE_FAVORITE_LIST, REMOVE_FAVORITE_PRODUCT } from "../actions/favoritesActions";


const initialState: ProductsState = {
    products: []
}

const favoritesReducer = (state: ProductsState = initialState, action: ProductsActions): ProductsState => {
    switch (action.type) {
        case ADD_FAVORITE_PRODUCT:
            return UseAddProduct(state, action.payload as Product)
        case REMOVE_FAVORITE_PRODUCT:
            return UseRemoveProduct(state, action.payload as string)
        case POPULATE_FAVORITE_LIST:
            return handlePopulateFavoriteProducts(state, action.payload as Product[]);
        default:
            return state;
    }
}

const handlePopulateFavoriteProducts = (state: ProductsState, favoriteProducts: Product[]): ProductsState => {
    return favoriteProducts.length > 0 ? {
        ...state,
        products: favoriteProducts
    } : state;
}

export default favoritesReducer