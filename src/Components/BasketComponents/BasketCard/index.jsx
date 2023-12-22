import React, { useContext } from 'react'
import { BasketContext } from '../../../Context/basket'
import './index.scss'

function BasketCard() {
  const { basket, removeBasket, increaseBasket, decreaseBasket } = useContext(BasketContext)
  return (
    <div className='basketCards'>
      {basket.length ? (basket.map((x) => (
        <div className='basketCard' key={x.id}>
          <div className="basketCard_title">
            <div className="basketHover">
              <i className="fa-solid fa-xmark" onClick={() => removeBasket(x)}></i>
            </div>
            <div className="basketCard_img">
              <img src={x.image} alt="" />
            </div>
            <p>{x.name}</p>
          </div>
          <p className='basketCard_price'>${x.price}</p>
          <div className="basketCard_counter">
            <div className="count">{x.count}</div>
            <div className="counter_btn">
              <i className="fa-solid fa-angle-up" onClick={() => increaseBasket(x)}></i>
              <i className="fa-solid fa-angle-down" onClick={() => decreaseBasket(x)}></i>
            </div>
          </div>
          <p>${(x.price) * (x.count)}</p>
        </div>
      ))) : (<p className='empty'>Basket is empty...</p>)}
    </div>
  )
}

export default BasketCard