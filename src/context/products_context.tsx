import React, { useContext, useReducer, MouseEvent, useEffect, } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import { InputProviderProps, ProductActionKind, IObject } from '../types/globaltypes.types'
import axios from 'axios'


export type InitialStateType = {
    openSidebar: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLButtonElement>) => void;
    closeSidebar: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLButtonElement> | any) => void;
    isSidebarOpen: boolean;
    products_loading: boolean;
    featured_products: Array<any>
    products_error: boolean
    products: any
    single_product_loading: boolean
    single_product_error: boolean
    single_product: any,
    fetchSingleProduct: (url: string) => Promise<void>
}

const initialState = {
    isSidebarOpen: false,
    openSidebar: () => null,
    closeSidebar: () => null,
    products_loading: false,
    featured_products: [],
    products_error: false,
    products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
    fetchSingleProduct: async (url: string) => { }
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
            const products = (response.data)
            dispatch({ type: ProductActionKind.GET_PRODUCTS_SUCCESS, payload: products })
        } catch (error) {
            dispatch({ type: ProductActionKind.GET_PRODUCTS_ERROR })

        }
    }
    const fetchSingleProduct = async (url: string) => {
        dispatch({ type: ProductActionKind.GET_SINGLE_PRODUCT_BEGIN })
        try {
            const response = await axios(url)
            const singleProduct = (response.data);
            dispatch({ type: ProductActionKind.GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
        } catch (error) {
            dispatch({ type: ProductActionKind.GET_SINGLE_PRODUCT_ERROR })
        }
    }
    useEffect(() => {
        fetchProducts(url)
        fetchSingleProduct(url)
    }, [])
    return (
        <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}
// custom Context
export const useProductsContext = () => {
    const productsContext = useContext(ProductsContext)
    if (!productsContext) {
        throw new Error(
            "null"
        );
    }

    return productsContext;
}

