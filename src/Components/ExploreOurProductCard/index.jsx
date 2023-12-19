import React, { useEffect, useState } from 'react'
import './index.scss'

function ExploreOurProductCard() {
    const [exploreCard, setExploreCard] = useState([])

    useEffect(() => {
        getExploreCard()
    }, [])

    async function getExploreCard() {
        const data = await fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
        const res = await data.json()
        setExploreCard(res)
    }

    return (
        <div className='exploreOurProductCard'>
            {exploreCard.slice(4, 12).map((x) => (
                <div className='exploreCard'>
                    <div className="exploreCard_img">
                        <div className="exploreCard_img_icon">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-eye"></i>
                        </div>
                        <img src={x.image} alt="" />
                        <div className="cardHover">
                            <p>Add To Cart</p>
                        </div>
                    </div>
                    <div className="exploreCard_text">
                        <p className='name'>{x.name}</p>
                        <div className="exploreCard_text_price">
                            <p className='price'>${x.price}</p>
                            <div className='exploreCard_text_price_star'>
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

export default ExploreOurProductCard