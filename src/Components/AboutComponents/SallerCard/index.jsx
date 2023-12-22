import React from 'react'
import './index.scss'

function SallerCard({icon,sallerText,sallerDesc}) {
  return (
    <div className='sallerCard'>
        <div className="sallerCard_icon">
        <i className={icon}></i>
        </div>
        <div className="sallerCard_textBox">
            <h4>{sallerText}</h4>
            <p>{sallerDesc}</p>
        </div>
    </div>
  )
}

export default SallerCard