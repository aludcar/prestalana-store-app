import { Product, ProductsState } from "../types/products";
import UseSortByField from "./UseSortByField";

export const UseRemoveProduct = (state: ProductsState, id: string): ProductsState => {

    const sortedProducts = UseSortByField<Product>({
        arrayToSort: state.products.filter((product) => product.id !== id),
        typeOfField: "string",
        field: "title"
    });

    return {
        ...state,
        products: sortedProducts
    }
}