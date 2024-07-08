import React, { useEffect } from 'react'
import { Product as ProductType, ProductsState } from '../types/products';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteProduct } from '../actions/favoritesActions'
import Product from './Product';
import { AuthUser } from '../types/auth';
import UseDataPersistence from '../hooks/UseDataPersistence';

const FavoriteList: React.FC = () => {

    const { products } = useSelector((state: { favoritesReducer: ProductsState }) => state.favoritesReducer)
    const authUser = useSelector((state: { authReducer: AuthUser }) => state.authReducer)
    const { setDataPersistence } = UseDataPersistence();
    const dispatch = useDispatch();

    useEffect(() => {
        setDataPersistence({
            key: authUser.username,
            data: {
                ...authUser,
                favoriteProducts: products
            }
        })
    }, [products, setDataPersistence, authUser])

    //Add new products in favorite list
    const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const product: ProductType = JSON.parse(e.dataTransfer.getData('text/plain'));
        if (product && product.parentType && product.parentType !== "cart") {
            dispatch(addFavoriteProduct(product));
        }
    }

    //Prevent default behavior
    const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    return (
        <section
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                border: 'red solid'
            }}>Favorites{
                products?.map((product) => (<Product key={product.id} productProp={product} parentType="favorites" />))
            }</section>
    )
}

export default FavoriteList