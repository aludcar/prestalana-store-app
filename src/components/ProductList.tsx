import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { initProducts } from '../actions/productsActions';
import { ProductsState} from '../types/products';
import Product from './Product';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/styled-wrappers/ProductsWrapper';

const ProductList: React.FC = () => {
    const dispatch = useDispatch()
    const { filterProducts: products } = useSelector((state: { productsReducer: ProductsState }) => state.productsReducer);

    useEffect(() => {
        const dataFetch = async () => {
            const response = await customFetch.get("/products?limit=6");
            dispatch(initProducts(response.data))
        }
        dataFetch();
    }, [dispatch])

    return (
        <Wrapper >

            {
                !products || products.length < 1
                    ? (<h4>No results..</h4>)
                    : (products?.map((product) => (
                        <Product key={product.id} productProp={product} parentType="products" />
                    )))
            }
        </Wrapper>
    )
}

export default ProductList