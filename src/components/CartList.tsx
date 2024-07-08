import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsState } from '../types/products';
import Product from './Product';

const CartList: React.FC = () => {
  const { products } = useSelector(((state: { cartReducer: ProductsState }) => state.cartReducer));

  return (
    <aside>
      Cart
      {
        products?.map((product) => (
          <Product
            key={product.id}
            productProp={product}
            parentType="cart"
          />))
      }
    </aside>
  )
}

export default CartList