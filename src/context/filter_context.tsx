import React, { useEffect, useContext, useReducer, MouseEvent } from 'react'
import reducer from '../reducers/filter_reducer'
import { FilterActionKind, InputProviderProps } from '../types/globaltypes.types'
import { useProductsContext } from './products_context'

export type InitialStateType = {
    filtered_products: Record<string | number, undefined>[],
    all_products: Record<string | number, undefined>[],
    grid_view: boolean,
    setGridView: (event: MouseEvent<HTMLButtonElement>) => void
    setListView: (event: MouseEvent<HTMLButtonElement>) => void,
    updateSort: (event: React.ChangeEvent<HTMLSelectElement>) => void
    sort: string,
    filters: {
        text: string,
        company: string,
        category: string,
        color: string,
        min_price: number,
        max_price: number,
        shipping: boolean
    }
}

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    setGridView: () => null,
    setListView: () => null,
    sort: "price-lowest",
    updateSort: () => null,
    filters: {
        text: "",
        company: "all",
        category: "all",
        color: "all",
        min_price: 0,
        max_price: 0,
        shipping: false
    }
}

const FilterContext = React.createContext<InitialStateType>(initialState)

export const FilterProvider = ({ children }: InputProviderProps) => {
    const { products } = useProductsContext()
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatch({ type: FilterActionKind.LOAD_PRODUCTS, payload: products })
    }, [products])

    useEffect(() => {
        dispatch({ type: FilterActionKind.SORT_PRODUCTS })
    }, [products, state.sort])

    const setGridView = () => {
        dispatch({ type: FilterActionKind.SET_GRIDVIEW })
    }
    const setListView = () => {
        dispatch({ type: FilterActionKind.SET_LISTVIEW })
    }
    const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //const name = e.target.name
        const value = e.target.value
        dispatch({ type: FilterActionKind.UPDATE_SORT, payload: value })
    }
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, updateSort }}>
            {children}
        </FilterContext.Provider>
    )
}
// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext)
}
