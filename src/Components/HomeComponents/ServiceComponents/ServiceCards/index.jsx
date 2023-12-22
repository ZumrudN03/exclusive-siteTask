import React from 'react'
import ServiceCard from '../ServiceCard'
import './index.scss'

function ServiceCards() {
  return (
    <div className='serviceCards'>
        <ServiceCard icon={"fa-solid fa-truck-fast"} serviceText={"FREE AND FAST DELIVERY"} serviceDesc={"Free delivery for all orders over $140"}/>
        <ServiceCard icon={"fa-solid fa-headset"} serviceText={"24/7 CUSTOMER SERVICE"} serviceDesc={"Friendly 24/7 customer support"}/>
        <ServiceCard icon={"fa-solid fa-shield-halved"} serviceText={"MONEY BACK GUARANTEE"} serviceDesc={"We reurn money within 30 days"}/>
    </div>
  )
}

export default ServiceCards