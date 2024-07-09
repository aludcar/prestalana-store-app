import React, { useEffect } from 'react'
import { Product as ProductType, ProductsState } from '../types/products';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteProduct} from '../actions/favoritesActions'
import Product from './Product';
import { AuthUser } from '../types/auth';
import UseDataPersistence from '../hooks/UseDataPersistence';
import Wrapper from '../assets/styled-wrappers/FavoritesWrapper';

const FavoriteList: React.FC = () => {

    const { products } = useSelector((state: { favoritesReducer: ProductsState }) => state.favoritesReducer)
    const authUser = useSelector((state: { authReducer: AuthUser }) => state.authReducer)
    const { setDataPersistence } = UseDataPersistence();
    const dispatch = useDispatch();

    //Update or set favorites products from localStorage
    useEffect(() => {
        if (authUser.isAuthenticated && authUser.username) {
            setDataPersistence({
                key: authUser.username,
                data: {
                    ...authUser,
                    favoriteProducts: products
                },
                source:"favorites"
            })

        }
    }, [
        products,
        setDataPersistence,
        authUser
    ])

    //Add new products in favorite list
    const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const product: ProductType = JSON.parse(e.dataTransfer.getData('text/plain'));

        if (product &&
            product.parentType &&
            product.parentType !== "cart" &&
            products.length < 3
        ) {
            dispatch(addFavoriteProduct(product));
        }
    }

    //Prevent default behavior
    const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    return (
        <Wrapper
            onDrop={handleOnDrop}
            onDragOver={handleOnDragOver}>
            <div className='favorite-row-text'>
                <h2>Drag and drop to add your favourites</h2>
            </div>
            {
                products?.map((product) => (
                    <div key={product.id} className='favorite-row-product'>
                        <Product productProp={product} parentType="favorites" />
                    </div>))
            }
        </Wrapper>
    )
}

export default FavoriteList