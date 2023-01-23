import React, { useContext, useReducer, MouseEvent } from 'react'
import reducer from '../reducers/products_reducer'

import { InputProviderProps, ProductActionKind } from '../types/globaltypes.types'

type InitialStateType = {
    isSidebarOpen: boolean;
    openSidebar: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLButtonElement>) => void;
    closeSidebar: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLButtonElement>) => void;
}
const initialState = {
    isSidebarOpen: false,
    openSidebar: () => null,
    closeSidebar: () => null
}

const ProductsContext = React.createContext<InitialStateType>(initialState);

export const ProductsProvider = ({ children }: InputProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const openSidebar = () => {
        dispatch({ type: ProductActionKind.SIDEBAR_OPEN })
    }
    const closeSidebar = () => {
        dispatch({ type: ProductActionKind.SIDEBAR_CLOSE })
    }
    return (
        <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
            {children}
        </ProductsContext.Provider>
    )
}
// custom Context
export const useProductsContext = () => {
    return useContext(ProductsContext)
}
