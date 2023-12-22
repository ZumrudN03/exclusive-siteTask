import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { SearchContext } from '../../Context/search'
import { BasketContext } from '../../Context/basket'
import { WishlistContext } from '../../Context/wishlist'
import { Link } from 'react-router-dom'

function ExploreOurProductCard() {
    const [exploreCard, setExploreCard] = useState([])
    const {search} = useContext(SearchContext)
    const {addBasket} = useContext(BasketContext)
  const {addWishlist} = useContext(WishlistContext)


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
            {exploreCard
            .filter((x)=> x.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((x) => (
                <div key={x.id} className='exploreCard'>
                    <div className="exploreCard_img">
                        <div className="exploreCard_img_icon">
                            <i className="fa-regular fa-heart" onClick={()=>addWishlist(x)}></i>
                            <Link to={`/detail/${x.id}`}><i className="fa-regular fa-eye"></i></Link>
                        </div>
                        <img src={x.image} alt="" />
                        <div className="cardHover">
                            <p onClick={()=>addBasket(x)}>Add To Cart</p>
                        </div>
                    </div>
                    <div className="exploreCard_text">
                        <p className='name'>{x.name}</p>
                        <div className="exploreCard_text_price">
                            <p className='price'>${x.price}</p>
                            <div className='exploreCard_text_price_star'>
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

export default ExploreOurProductCard