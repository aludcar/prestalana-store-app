import { ProductsState, Product } from "../types/products";
import UseSortByField from "./UseSortByField";
/* import { useSelector } from "react-redux";
import { AuthUser } from "../types/auth";
import UseDataPersistence from "./UseDataPersistence"; */

export const UseAddProduct = (state: ProductsState, product: Product) => {
/*     const authUser = useSelector((state:{authReducer:AuthUser}) =>state.authReducer)
    const {setDataPersistence} = UseDataPersistence() */

    if (!state.products.find(productList => productList.id === product.id)) {
         //sort the favorites and cart products list 
        const sortedProducts = UseSortByField<Product>({
            arrayToSort: [...state.products, product],
            typeOfField: "string",
            field: "title"
        })
/*         //Update localStorage Data
        if(product.parentType === "favorites"){
            setDataPersistence({
                key:authUser.username,
                data:{
                    ...authUser,
                    favoriteProducts:sortedProducts
                }
            })
        } */
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