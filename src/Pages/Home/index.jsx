import React from 'react'
import SliderSection from '../../Components/SliderSection'
import BrowseByCategorySection from '../../Components/BrowseByCategorySection'
import ServiceCards from '../../Components/ServiceCards'
import BuyNowSection from '../../Components/BuyNowSection'
import NewArrivalSection from '../../Components/NewArrivalSection'
import BestSellingProductsSection from '../../Components/BestSellingProductsSection'

function HomePage() {
  return (
    <div>
        <SliderSection/>
        <BrowseByCategorySection/>
        <BestSellingProductsSection/>
        <BuyNowSection/>
        <NewArrivalSection/>
        <ServiceCards/>
    </div>
  )
}

export default HomePage