import React from 'react'
import './index.scss'

function ServiceCard({serviceDesc, serviceText, icon}) {
  return (
    <div className='serviceCard'>
        <div className="serviceCard_icon">
        <i class={icon}></i>
        </div>
        <div className="serviceCard_textBox">
            <h4>{serviceText}</h4>
            <p>{serviceDesc}</p>
        </div>
    </div>
  )
}

export default ServiceCard