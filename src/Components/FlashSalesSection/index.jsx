import React from 'react'
import './index.scss'

function FlashSalesSection() {
    return (
        <div className='flashSalesSection'>
            <div className="flashSalesSection_header">
                <div className="Today">
                    <div className='blok'></div>
                    <p>Today's</p>
                </div>
                <div className="flashSalesSection_header_text">
                    <div className="flashSalesSection_header_timer">
                        <p>Flash Sales</p>
                    </div>
                    <div className="flashSalesSection_header_icons">
                        <i class="fa-solid fa-arrow-left-long"></i>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
            </div>

            <div className="flashSalesSection_btn">
                <button>View All Products</button>
            </div>
        </div>
    )
}

export default FlashSalesSection