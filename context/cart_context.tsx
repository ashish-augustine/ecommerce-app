import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const getLocalStorage = () => {
    if (typeof window !== 'undefined') {
    let cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(cart)
    } else {
        return []
    }
  }
}

export const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
}

const CartContext = React.createContext({
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
    addToCart: (id: string, color: string, amount: number, product: object) => {},
    removeItem: (id: string) => {},
    toggleAmount: (id: string, value: string) => {},
    clearCart: () => {}
})

export const CartProvider = ({ children } : any) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // add to cart
  const addToCart = (id: string, color: string, amount: number, product: object) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }
  // remove item
  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }
  // toggle amount
  const toggleAmount = (id: string, value: string) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
  }
  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
