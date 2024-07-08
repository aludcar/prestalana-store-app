import { Product, ProductsActions } from "../types/products";
export const ADD_FAVORITE_PRODUCT = "ADD_FAVORITE_PRODUCT";
export const REMOVE_FAVORITE_PRODUCT = "REMOVE_FAVORITE_PRODUCT";
export const POPULATE_FAVORITE_LIST = "POPULATE_FAVORITE_LIST";

export const addFavoriteProduct = (newProduct: Product): ProductsActions => ({
    type: ADD_FAVORITE_PRODUCT,
    payload: newProduct
})

export const populateFavoriteList = (favoriteProducts: Product[]): ProductsActions => ({
    type: ADD_FAVORITE_PRODUCT,
    payload: favoriteProducts
})

export const removeFavoriteProduct = (productId: string): ProductsActions => ({
    type: REMOVE_FAVORITE_PRODUCT,
    payload: productId
})

