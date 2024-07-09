import { ProductsState, Product } from "../types/products";
import UseSortByField from "./UseSortByField";

export const UseAddProduct = (state: ProductsState, product: Product) => {

    if (!state.products.find(productList => productList.id === product.id)
        && state.products.length < 4) {
         //sort the favorites and cart products list 
        const sortedProducts = UseSortByField<Product>({
            arrayToSort: [...state.products, product],
            typeOfField: "string",
            field: "title"
        })
        
        return {
            ...state,
            products: sortedProducts
        }
    } else {
        return {
            ...state,
        }
    }
}