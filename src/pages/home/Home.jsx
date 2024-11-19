import React from 'react'
import LatestCollection from '../../components/LatestCollection'
import Banner from './Banner'
import BestSeller from '../../components/BestSeller'
import Policy from '../../components/Policy'
import Subscribe from '../../components/Subscribe'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <Subscribe />
    </div>
  )
}

export default Home
