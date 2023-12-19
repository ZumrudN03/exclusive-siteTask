import React from 'react'
import './index.scss'
import BestSellingProductsCard from '../BestSellingProductsCard'

function BestSellingProductsSection() {
  return (
    <div className='bestSellingProductsSection'>
      <div className="bestSellingProductsSection_header">
        <div className="thisMonth">
          <div className='blok'></div>
          <p>This Month</p>
        </div>
        <div className="bestSellingProductsSection_header_text">
        <p>Best Selling Products</p>
        <button>View All</button>
        </div>
      </div>
      <BestSellingProductsCard />
    </div>
  )
}

export default BestSellingProductsSection