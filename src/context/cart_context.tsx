import React, { useEffect, useContext, useReducer, MouseEvent } from 'react'
import reducer from '../reducers/cart_reducer'
import { InputProviderProps, FilterActionKind } from '../types/globaltypes.types'


export type InitialStateType = {
    cart: Record<string | number, undefined>[],
    total_items: number,
    total_amount: number,
    shipping_fee: number,
    addToCart: (id: string, color: any, amount: any, product: any) => void
    removeItem: (id: string) => void
    toggleAmount: (identify: string, value: string) => void
    clearCart: (event: MouseEvent<HTMLButtonElement>) => void
}

const getLocalStorage = () => {
    let cart = localStorage.getItem("cart")
    if (cart) {
        return JSON.parse(localStorage.getItem("cart") || "")
    } else {
        return []
    }
}


const initialState =
{
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
    addToCart: (id: string, color: any, amount: any, product: any) => null,
    removeItem: () => null,
    toggleAmount: () => null,
    clearCart: () => null
}

const CartContext = React.createContext<InitialStateType>(initialState)

export const CartProvider = ({ children }: InputProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //add to cart
    const addToCart = (id: string, color: any, amount: any, product: any) => {
        console.log(id, color, amount, product)
        dispatch({ type: FilterActionKind.ADD_TO_CART, payload: { id, color, amount, product } })
    }
    //remove  item
    const removeItem = (id: string) => {
        dispatch({ type: FilterActionKind.REMOVE_CART_ITEM, payload: id })
    }
    //toggle amount
    const toggleAmount = (identify: string, value: string) => {
        dispatch({ type: FilterActionKind.TOGGLE_CART_ITEM_AMOUNT, payload: { identify, value } })
    }
    //clear cart
    const clearCart = () => {
        dispatch({ type: FilterActionKind.CLEAR_CART })
    }
    useEffect(() => {
        dispatch({ type: FilterActionKind.COUNT_CART_TOTALS })
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>{children}</CartContext.Provider>
    )
}
export const useCartContext = () => {
    return useContext(CartContext)
}
