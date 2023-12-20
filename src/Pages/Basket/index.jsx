import React from 'react'
import BasketCard from '../../Components/BasketCard'
import './index.scss'

function Basket() {
  return (
    <div className='basket_container'>
      <div className="cart">
        <p><span>Home</span>/Cart</p>
      </div>
      <div className="basket">
        <div className="basket_header">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <BasketCard />
        <div className="basket_footer">
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className="basket_total_coupon">
          <div className="basket_coupen">
            <input type="text" placeholder='Coupon Code' />
            <button>Apply Coupon</button>
          </div>
          <div className="basket_total"></div>
        </div>
      </div>
    </div>
  )
}

export default Basket