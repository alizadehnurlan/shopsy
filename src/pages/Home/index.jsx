import React, { useEffect } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import TopProducts from '../../components/TopProducts'

const Home = () => {

  return (
    <div>
      <Hero />
      <Products />
      <TopProducts />
    </div>
  )
}

export default Home