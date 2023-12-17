import React from 'react'
import './index.scss'

function ServiceCard({serviceDesc, serviceText}) {
  return (
    <div className='serviceCard'>
        <div className="serviceCard_icon">
        <i class="fa-solid fa-truck-fast"></i>
        </div>
        <div className="serviceCard_textBox">
            <h4>{serviceText}</h4>
            <p>{serviceDesc}</p>
        </div>
    </div>
  )
}

export default ServiceCard