import React, { createContext, useState } from 'react';
import useLocalStrg from '../Hook/useLocalStrg';

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useLocalStrg("wishlist", []);
    const [wishlisted, setWishlisted] = useState(false);

    function addWishlist(item) {
        const index = wishlist.findIndex((x) => x.id === item.id);
        if (index === -1) {
            setWishlist([...wishlist, { ...item }]);
            setWishlisted(true);
        } else {
            removeWishlist(item);
        }
    }

    function removeWishlist(item) {
        setWishlist(wishlist.filter((x) => x.id !== item.id));
        setWishlisted(false);
    }

    return (
        <WishlistContext.Provider value={{ wishlist, addWishlist, removeWishlist, wishlisted }}>
            {children}
        </WishlistContext.Provider>
    );
}

export default WishlistProvider;
