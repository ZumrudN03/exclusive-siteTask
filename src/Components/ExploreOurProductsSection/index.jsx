import React from 'react'
import './index.scss'
import ExploreOurProductCard from '../ExploreOurProductCard'

function ExploreOurProductsSection() {
    return (
        <div className='exploreOurProductsSection'>
            <div className="exploreOurProductsSection_header">
                <div className="ourProducts">
                    <div className='blok'></div>
                    <p>Our Products</p>
                </div>
                <div className="exploreOurProductsSection_header_text">
                    <p>Explore Our Products</p>
                    <div className="exploreOurProductsSection_header_icons">
                        <i class="fa-solid fa-arrow-left-long"></i>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
            </div>
            <ExploreOurProductCard />
            <div className="exploreOurProductsSection_btn">
                <button>View All Products</button>
            </div>
        </div>
    )
}

export default ExploreOurProductsSection