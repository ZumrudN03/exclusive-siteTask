import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/wishlist'
import { BasketContext } from '../../Context/basket'
import './index.scss'
import { Link } from 'react-router-dom'

function WishlistCard() {
    const { wishlist, removeWishlist } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)
    return (
        <div className='wishlistCard_container'>
            {wishlist.length ? (
                wishlist.map((x) => (
                    <div className='wishlistCard'>
                        <div className="wishlistCard_img">
                            <i className="fa-regular fa-trash-can" onClick={() => removeWishlist(x)}></i>
                            <img src={x.image} alt="" />
                            <div className="cardHover" onClick={() => addBasket(x)}>
                                <p>Add To Cart</p>
                            </div>
                        </div>
                        <div className="wishlistCard_text">
                            <p className='name'>{x.name}</p>
                            <div className="wishlistCard_text_price">
                                <p className='price'>${x.price}</p>
                                <p className='oldPrice'>${x.oldPrice ? x.oldPrice : (x.price * 2)}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (<div className='empty'>
                <p>Wishlist is empty...</p>
                <Link to={"/"}><button>Go back to shop</button></Link>
                </div>)
            }
        </div >
    )
}

export default WishlistCard