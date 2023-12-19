import React, { useEffect, useState } from 'react'
import './index.scss'
function BestSellingProductsCard() {
  const [bestSellingCard, setBestSellingCard] = useState([])

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
        <div className='bestSellingCard'>
          <div className="bestSellingCard_img">
            <div className="bestSellingCard_img_icon">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-eye"></i>
            </div>
            <img src={x.image} alt="" />
            <div className="cardHover">
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
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p>(65)</p>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default BestSellingProductsCard