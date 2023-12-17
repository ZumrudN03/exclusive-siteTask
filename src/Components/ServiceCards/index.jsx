import React from 'react'
import ServiceCard from '../ServiceCard'
import './index.scss'

function ServiceCards() {
  return (
    <div className='serviceCards'>
        <ServiceCard serviceText={"FREE AND FAST DELIVERY"} serviceDesc={"Free delivery for all orders over $140"}/>
        <ServiceCard serviceText={"24/7 CUSTOMER SERVICE"} serviceDesc={"Friendly 24/7 customer support"}/>
        <ServiceCard serviceText={"MONEY BACK GUARANTEE"} serviceDesc={"We reurn money within 30 days"}/>
    </div>
  )
}

export default ServiceCards