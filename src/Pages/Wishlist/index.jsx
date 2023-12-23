import React, { useContext } from 'react'
import './index.scss'
import WishlistCard from '../../Components/WishlistComponents/WishlistCard'
import { WishlistContext } from '../../Context/wishlist'

function Wishlist() {
    const {wishlist} = useContext(WishlistContext)
  return (
    <div className='wishlist'>
        <div className="wishlist_header">
            <p>Wishlist({wishlist.length ? wishlist.length : "0"})</p>
            <button>Move All To Bag</button>
        </div>
        <WishlistCard/>
    </div>
  )
}

export default Wishlist