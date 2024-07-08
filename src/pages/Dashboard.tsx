import React from 'react'
import ProductList from '../components/ProductList'
import CartList from '../components/CartList'
import FavoriteList from '../components/FavoriteList'
import Filter from '../components/Filter'

const Dashboard: React.FC = () => {
  return (
    <div style={{
      display: 'flex',

    }}>
      <div>
        <Filter />
        <ProductList />
      </div>
      <div><FavoriteList /></div>
      <div><CartList /></div>
    </div>
  )
}

export default Dashboard