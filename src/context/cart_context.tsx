import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import { InputProviderProps, FilterActionKind } from '../types/globaltypes.types'


export type InitialStateType = {
    cart: Record<string, undefined>[],
    total_items: number,
    total_amount: number,
    shipping_fee: number,
    addToCart: (id: any, color: any, amount: any, product: any) => void
}


const initialState =
{
    cart: [],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
    addToCart: (id: any, color: any, amount: any, product: any) => null
}

const CartContext = React.createContext<InitialStateType>(initialState)

export const CartProvider = ({ children }: InputProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    //add to cart

    const addToCart = (id: any, color: any, amount: any, product: any) => {
        console.log(id, color, amount, product)
        dispatch({ type: FilterActionKind.ADD_TO_CART, payload: { id, color, amount, product } })
    }


    return (
        <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>
    )
}
export const useCartContext = () => {
    return useContext(CartContext)
}
