import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsState } from '../types/products';
import Product from './Product';
import Wrapper from '../assets/styled-wrappers/CartWrapper';
import Button from './Button';

const CartList: React.FC = () => {
  const { products } = useSelector(((state: { cartReducer: ProductsState }) => state.cartReducer));

  return (
    <Wrapper>
      <div className='cart-row-text'>
        <h2>Cart</h2>
      </div>
      <div className='cart-row-products'>
        {
          products?.map((product) => (
            <div key={product.id} className='cart-row-product'>
              <Product
                productProp={product}
                parentType="cart"
              />
            </div>
          ))
        }
      </div>
      <div className='cart-row-button'>
        <Button type="button" buttonText='Buy now' parentType="products" />
      </div>
    </Wrapper>
  )
}

export default CartList