import React, { useState } from 'react'
import { ProductProps } from '../types/products'
import Button from './Button'
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../actions/cartActions';
import { Product as ProductType } from '../types/products';
import Wrapper from '../assets/styled-wrappers/ProductWrapper';

const Product: React.FC<ProductProps> = ({ productProp, parentType }) => {

    const [product,] = useState<ProductType>(productProp);

    const dispatch = useDispatch();

    const handleAddProductToCart = (): void => {
        dispatch(addProduct(product))
    }

    const handleRemoveProductFromCart = (): void => {
        const isConfirmed = window.confirm(`Are you sure you want to remove the product?`);
        if (isConfirmed) dispatch(removeProduct(product.id))

    }

    const handleOnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ ...product, parentType }));
        e.dataTransfer.effectAllowed = "move";
    }
    return (
        <Wrapper
            parentType={parentType}
            onDragStart={handleOnDragStart}
            draggable={parentType !== "cart"} >

            <div className='product-row-img'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='product-row-text'>
                <span>{product.title?.length >= 14 ? `${product.title.substring(0, 13)}...` : product.title}</span>
            </div>

            {
                parentType !== "favorites"
                && <div className='product-row-button'>
                    <Button
                        type="button"
                        buttonText='Add to Cart'
                        parentType={parentType}
                        handleButtonClick={parentType === "cart" ? handleRemoveProductFromCart : handleAddProductToCart} />
                </div>
            }

        </Wrapper>
    )
}

export default Product