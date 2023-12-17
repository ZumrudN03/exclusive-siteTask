import React from 'react'
import SliderSection from '../../Components/SliderSection'
import BrowseByCategorySection from '../../Components/BrowseByCategorySection'
import ServiceCards from '../../Components/ServiceCards'

function HomePage() {
  return (
    <div>
        <SliderSection/>
        <BrowseByCategorySection/>
        <ServiceCards/>
    </div>
  )
}

export default HomePage