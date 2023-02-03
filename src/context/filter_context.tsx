import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import { FilterActionKind, InputProviderProps } from '../types/globaltypes.types'
import { useProductsContext } from './products_context'

export type InitialStateType = {
    filtered_products: Record<string | number, undefined>[],
    all_products: Record<string | number, undefined>[],
    grid_view: boolean
}

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true
}

const FilterContext = React.createContext<InitialStateType>(initialState)

export const FilterProvider = ({ children }: InputProviderProps) => {
    const { products } = useProductsContext()
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatch({ type: FilterActionKind.LOAD_PRODUCTS, payload: products })
    }, [products])


    return (
        <FilterContext.Provider value={{ ...state }}>
            {children}
        </FilterContext.Provider>
    )
}
// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext)
}
