import { Product, ProductsState } from "../types/products";
import UseSortByField from "./UseSortByField";
/* import { useSelector } from "react-redux";
import { AuthUser } from "../types/auth";
import UseDataPersistence from "./UseDataPersistence"; */

export const UseRemoveProduct = (state: ProductsState, id: string): ProductsState => {
/*     const authUser = useSelector((state:{authReducer:AuthUser}) =>state.authReducer)
    const {setDataPersistence} = UseDataPersistence() */

    //filter and sort the favorites and cart products list 
    /* const productToRemove = state.products.find((product)=>product.id === id); */
    const sortedProducts = UseSortByField<Product>({
        arrayToSort: state.products.filter((product) => product.id !== id),
        typeOfField: "string",
        field: "title"
    });
/*     //Update localStorage Data
    if(productToRemove && productToRemove.parentType === "favorites"){
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
}