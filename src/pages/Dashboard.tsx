import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../components/ProductList'
import CartList from '../components/CartList'
import FavoriteList from '../components/FavoriteList'
import Filter from '../components/Filter'
import Wrapper from '../assets/styled-wrappers/DashboardWrapper'
import { AuthUser } from '../types/auth'
import { Product as ProductType } from '../types/products'
import { removeFavoriteProduct, populateFavoriteList } from '../actions/favoritesActions'
import UseDataPersistence from '../hooks/UseDataPersistence'

const Dashboard: React.FC = () => {

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const authUser = useSelector((state: { authReducer: AuthUser }) => state.authReducer)
  const dispatch = useDispatch()
  const { getDataPersistence } = UseDataPersistence();

  useEffect(() => {
    const savedData = getDataPersistence({ key: authUser.username });
    if (savedData) {
      const { favoriteProducts } = savedData;
      if (favoriteProducts.length) {
        dispatch(populateFavoriteList(favoriteProducts))
      }
    }
    setIsDataLoaded(true);
  }, [getDataPersistence, dispatch, authUser])


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
    <Wrapper>
      <div className='dashboard-row-products-favorites'
        onDrop={handleOutsideDrop}
        onDragOver={handleDragOver}
      >
        <div className='dashboard-row-products'>
          <div className='dashboard-row-title'>
            <h1>Store app</h1>
          </div>
          <Filter />
          <ProductList />
        </div>
        <div className='dashboard-row-favorites'>
          {isDataLoaded && <FavoriteList />}
        </div>
      </div>
      <div className='dashboard-row-cart-list'>
        <CartList />
      </div>
    </Wrapper>
  )
}

export default Dashboard