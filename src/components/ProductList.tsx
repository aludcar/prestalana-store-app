import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { initProducts } from '../actions/productsActions';
import { ProductsState, Product as ProductType } from '../types/products';
import Product from './Product';
import customFetch from '../utils/customFetch';
import { removeFavoriteProduct } from '../actions/favoritesActions';

const ProductList: React.FC = () => {
    const dispatch = useDispatch()
    const { filterProducts: products } = useSelector((state: { productsReducer: ProductsState }) => state.productsReducer);

    useEffect(() => {
        const dataFetch = async () => {
            const response = await customFetch.get("/products?limit=8");
            dispatch(initProducts(response.data))
        }
        dataFetch();
    }, [dispatch])

    //receive the object as string and parse to product to remove to favorite list
    const handleOutsideDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const product: ProductType = JSON.parse(e.dataTransfer.getData('text/plain'));
        if (product && product.parentType && product.parentType === "favorites") {
            window.confirm(`Are you sure you want to remove the product?`)
                && dispatch(removeFavoriteProduct(product.id));
        }
    };

    //Prevent default behavior
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <section
            onDrop={handleOutsideDrop}
            onDragOver={handleDragOver}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                border: 'pink solid'
            }}>

            {
                !products || products.length < 1
                    ? (<h4>No results..</h4>)
                    : (products?.map((product) => (
                        <Product key={product.id} productProp={product} parentType="products" />
                    )))
            }
        </section>
    )
}

export default ProductList