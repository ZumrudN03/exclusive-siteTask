import React from 'react'
import BrowseByCategoryCards from '../../BrowseByCategoryComponents/BrowseByCategoryCards'
import './index.scss'

function BrowseByCategorySection() {
  return (
    <div className='BrowseByCategorySection'>
      <div className="BrowseByCategorySection_header">
        <div className="categories">
          <div className='blok'></div>
          <p>Categories</p>
        </div>
        <div className="BrowseByCategorySection_header_text">
          <p>Browse By Category</p>
          <div className="BrowseByCategorySection_header_icons">
          <i className="fa-solid fa-arrow-left-long"></i>
          <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
        <BrowseByCategoryCards/>
    </div>
  )
}

export default BrowseByCategorySection