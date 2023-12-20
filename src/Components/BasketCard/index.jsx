import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basket'

function BasketCard() {
    const {basket, removeBasket, increaseBasket, decreaseBasket} = useContext(BasketContext)
  return (
    <div className='basketCards'>
        {basket.map((x)=>(
            <div className='basketCard'>
                <img src={x.image} alt="" />
                <p>{x.name}</p>
                <p>{x.price}</p>
            </div>
        ))}
    </div>
  )
}

export default BasketCard