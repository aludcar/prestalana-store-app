import { Product, ProductsActions} from "../types/products";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = (newProduct: Product): ProductsActions => ({
    type: ADD_PRODUCT,
    payload: newProduct
})

export const removeProduct = (productId: string): ProductsActions => ({
    type: REMOVE_PRODUCT,
    payload: productId
})