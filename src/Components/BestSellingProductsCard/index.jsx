import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { BasketContext } from '../../Context/basket'
import { WishlistContext } from '../../Context/wishlist'
import { Link } from 'react-router-dom'
function BestSellingProductsCard() {
  const [bestSellingCard, setBestSellingCard] = useState([])
  const {addBasket} = useContext(BasketContext)
  const {addWishlist} = useContext(WishlistContext)



  useEffect(() => {
    getBestSellingCard();
  }, [])

  async function getBestSellingCard() {
    const data = await fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products");
    const res = await data.json();
    setBestSellingCard(res);
  }

  return (
    <div className='bestSellingProductsCard'>
      {bestSellingCard.slice(0, 4).map((x) => (
        <div key={x.id} className='bestSellingCard'>
          <div className="bestSellingCard_img">
            <div className="bestSellingCard_img_icon">
              <i className={`${x.isActive ? "fa-solid" : "fa-regular" } fa-heart`} onClick={()=>addWishlist(x)}></i>
              <Link to={`/detail/${x.id}`}><i className="fa-regular fa-eye"></i></Link>
            </div>
            <img src={x.image} alt="" />
            <div className="cardHover" onClick={()=>addBasket(x)}>
              <p>Add To Cart</p>
            </div>
          </div>
          <div className="bestSellingCard_text">
            <p className='name'>{x.name}</p>
            <div className="bestSellingCard_text_price">
              <p className='price'>${x.price}</p>
              <p className='oldPrice'>${x.oldPrice}</p>
            </div>
            <div className="bestSellingCard_text_comment">
              <div className='bestSellingCard_text_comment_star'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>({x.comments})</p>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default BestSellingProductsCard