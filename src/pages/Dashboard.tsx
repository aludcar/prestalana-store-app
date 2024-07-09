import React from 'react'
import ProductList from '../components/ProductList'
import CartList from '../components/CartList'
import FavoriteList from '../components/FavoriteList'
import Filter from '../components/Filter'
import Wrapper from '../assets/styled-wrappers/DashboardWrapper'

const Dashboard: React.FC = () => {
  return (
    <Wrapper>
      <div className='dashboard-row-products-favorites'>
        <div className='dashboard-row-products'>
          <h1>Store app</h1>
          <Filter />
          <ProductList />
        </div>
        <div className='dashboard-row-favorites'>
          <FavoriteList />
        </div>
      </div>
      <div className='dashboard-row-cart-list'>
        <CartList />
      </div>
    </Wrapper>
  )
}

export default Dashboard