import React, { useContext } from 'react'
import BasketCard from '../../Components/BasketCard'
import './index.scss'
import { BasketContext } from '../../Context/basket'
import { Link } from 'react-router-dom'

function Basket() {
  const { totalPrice } = useContext(BasketContext)
  return (
    <div className='basket_container'>
      <div className="cart">
        <p><span> <Link to={"/"}>Home</Link> /</span> Cart</p>
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
          <Link to={"/#exploreOurProductsSection"}><button>Return To Shop</button></Link>
          <button>Update Cart</button>
        </div>
        <div className="basket_total_coupon">
          <div className="basket_coupen">
            <input type="text" placeholder='Coupon Code' />
            <button>Apply Coupon</button>
          </div>
          <div className="basket_total">
            <p className='cardTotal'>Cart Total</p>
            <div className="total">
              <p>Subtotal:</p>
              <p className='price'>${totalPrice()}</p>
            </div>
            <div className="total_shipping">
              <p>Shipping:</p>
              <p className='price'>Free</p>
            </div>
            <div className="total">
              <p>Total:</p>
              <p className='price'>${totalPrice()}</p>
            </div>
            <div className="total_btn">
              <button>Procees to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket