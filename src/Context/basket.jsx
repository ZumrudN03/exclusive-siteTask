import React, { createContext } from 'react'
import useLocalStrg from '../Hook/useLocalStrg'

export const BasketContext = createContext()

function BasketProvider({ children }) {
    const [basket, setBasket] = useLocalStrg("basket", [])

    function addBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        if (index === -1) {
            setBasket([...basket, { ...item, count: 1 }])
            return

        }
        else {
            basket[index].count++
            setBasket([...basket])
        }
    }

    function removeBasket(item) {
        setBasket(basket.filter((x) => x.id !== item.id))
    }

    function increaseBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        basket[index].count++
        setBasket([...basket])
    }

    function decreaseBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        if (basket[index].count > 1) {
            basket[index].count--
            setBasket([...basket])

        } else {
            return
        }
    }

    function totalPrice() {
        return basket.reduce((total,item)=> total+item.count*item.price,0).toFixed(2)
    }

    const data = { basket, addBasket, removeBasket, increaseBasket, decreaseBasket, totalPrice}
    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider