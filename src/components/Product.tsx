import React, { useState } from 'react'
import { ProductProps } from '../types/products'
import Button from './Button'
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../actions/cartActions';
import { Product as ProductType } from '../types/products';

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
        <div
            onDragStart={handleOnDragStart}
            draggable={parentType !== "cart"}
            style={{ border: 'aliceblue solid', }} >
            {/* Quitar los line styles */}
            <img style={{
                width: '105px',
                height: '105px',
            }} src={product.image} alt={product.title} />
            <p>{product.title}</p>
            {
                parentType !== "favorites"
                && <Button
                    type="button"
                    buttonText='Add to Cart'
                    parentType={parentType}
                    handleButtonClick={parentType === "cart" ? handleRemoveProductFromCart : handleAddProductToCart} />
            }

        </div>
    )
}

export default Product