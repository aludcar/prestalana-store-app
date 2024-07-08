import { Product, ProductsActions } from "../types/products";

export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

export const initProducts = (products: Product[]): ProductsActions => ({
    type: INIT_PRODUCTS,
    payload: products
})

export const filterProducts = (term: string): ProductsActions => ({
    type: FILTER_PRODUCTS,
    payload: term
})

