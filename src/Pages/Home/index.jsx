import React from 'react'
import SliderSection from '../../Components/SliderSection'
import BrowseByCategorySection from '../../Components/BrowseByCategorySection'
import ServiceCards from '../../Components/ServiceCards'
import BuyNowSection from '../../Components/BuyNowSection'
import NewArrivalSection from '../../Components/NewArrivalSection'
import BestSellingProductsSection from '../../Components/BestSellingProductsSection'
import ExploreOurProductsSection from '../../Components/ExploreOurProductsSection'
import FlashSalesSection from '../../Components/FlashSalesSection'

function HomePage() {
  return (
    <div>
        <SliderSection/>
        <FlashSalesSection/>
        <BrowseByCategorySection/>
        <BestSellingProductsSection/>
        <BuyNowSection/>
        <ExploreOurProductsSection/>
        <NewArrivalSection/>
        <ServiceCards/>
    </div>
  )
}

export default HomePage