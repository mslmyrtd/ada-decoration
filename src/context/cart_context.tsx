import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import { InputProviderProps } from '../types/globaltypes.types'


export type InitialStateType = {
    cart: Record<string, undefined>[],
    total_items: number,
    total_amount: number,
    shipping_fee: number,
}


const initialState =
{
    cart: [],
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
}

const CartContext = React.createContext<InitialStateType>(initialState)

export const CartProvider = ({ children }: InputProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
    )
}
export const useCartContext = () => {
    return useContext(CartContext)
}
