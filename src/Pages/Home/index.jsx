import React from 'react'
import SliderSection from '../../Components/HomeComponents/SliderSection'
import BrowseByCategorySection from '../../Components/HomeComponents/BrowseByCategoryComponents/BrowseByCategorySection'
import ServiceCards from '../../Components/HomeComponents/ServiceComponents/ServiceCards'
import BuyNowSection from '../../Components/HomeComponents//BuyNowSection'
import NewArrivalSection from '../../Components/HomeComponents/NewArrivalSection'
import BestSellingProductsSection from '../../Components/HomeComponents/BestSellingProductsComponents/BestSellingProductsSection'
import ExploreOurProductsSection from '../../Components/HomeComponents/ExploreOurProductComponents/ExploreOurProductsSection'
import FlashSalesSection from '../../Components/HomeComponents/FlashSalesComponents/FlashSalesSection'

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