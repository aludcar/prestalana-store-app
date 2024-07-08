import { FILTER_PRODUCTS, INIT_PRODUCTS } from "../actions/productsActions"
import UseSortByField from "../hooks/UseSortByField"
import { ProductsState, ProductsActions, Product } from "../types/products"

const initialState: ProductsState = {
    products: [],
    filterProducts: []
}

const productsReducer = (state: ProductsState = initialState, action: ProductsActions): ProductsState => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return handleInitProducts(state, action.payload as Product[])
        case FILTER_PRODUCTS:
            return handleFilterProducts(state, action.payload as string)
        default:
            return state
    }

}

const handleInitProducts = (state: ProductsState, products: Product[]): ProductsState => {
    const sortedProducts = UseSortByField<Product>({
        arrayToSort: products,
        typeOfField: "string",
        field: "title"
    });

    return {
        ...state,
        products: sortedProducts,
        filterProducts: sortedProducts
    }
}

const handleFilterProducts = (state: ProductsState, term: string): ProductsState => {
    if (!term) {
        return {
            ...state,
            filterProducts: state.products
        }
    }

    //filter and sort products by term
    const filterProducts = UseSortByField<Product>({
        arrayToSort: state.products.filter(
            (product: Product) =>
                product.title.toLowerCase().includes(term.toLowerCase())
        ),
        typeOfField: "string",
        field: "title"
    })

    return {
        ...state,
        filterProducts
    }

}

export default productsReducer