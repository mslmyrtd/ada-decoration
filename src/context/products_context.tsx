import React, { useContext, useReducer, MouseEvent, useEffect } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import { InputProviderProps, ProductActionKind } from '../types/globaltypes.types'
import axios from 'axios'

type InitialStateType = {
    isSidebarOpen: boolean;
    openSidebar: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLButtonElement>) => void;
    closeSidebar: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLButtonElement>) => void;
}
const initialState = {
    isSidebarOpen: false,
    openSidebar: () => null,
    closeSidebar: () => null,
    products_loading: false,
    products_error: false,
    products: [],
    featured_product: [],
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
    const fetchProducts = async (url: string) => {
        dispatch({ type: ProductActionKind.GET_PRODUCTS_BEGIN })
        try {
            const response = await axios(url)
            const products = response.data
            dispatch({ type: ProductActionKind.GET_PRODUCTS_SUCCESS, payload: products })
        } catch (error) {
            dispatch({ type: ProductActionKind.GET_PRODUCTS_ERROR })

        }
    }
    useEffect(() => {
        fetchProducts(url)
    }, [])
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
