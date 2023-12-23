import React from 'react'
import SallerCard from '../SallerCard'
import './index.scss'

function SallerCards() {
  return (
    <div className='sallerCards'>
        <SallerCard icon={"fa-solid fa-shop"} sallerText={"10.5k"} sallerDesc={"Sallers active our site"}/>
        <SallerCard icon={"fa-solid fa-circle-dollar-to-slot"} sallerText={"33k"} sallerDesc={"Mopnthly Produduct Sale"}/>
        <SallerCard icon={"fa-solid fa-gift"} sallerText={"45.5k"} sallerDesc={"Customer active in our site"}/>
        <SallerCard icon={"fa-solid fa-sack-dollar"} sallerText={"25k"} sallerDesc={"Anual gross sale in our site"}/>
    </div>
  )
}

export default SallerCards