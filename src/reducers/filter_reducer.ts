import { InitialStateType } from '../context/filter_context'
import { FilterActionKind, FilterAction } from '../types/globaltypes.types'

const filter_reducer = (state: InitialStateType, action: FilterAction) => {
  const { type, payload } = action
  switch (type) {
    case FilterActionKind.LOAD_PRODUCTS:
      let maxPrice = payload.map((p: any) => p.price)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      }
    case FilterActionKind.SET_GRIDVIEW:
      return {
        ...state,
        grid_view: true,
      }
    case FilterActionKind.SET_LISTVIEW:
      return {
        ...state,
        grid_view: false,
      }
    case FilterActionKind.UPDATE_SORT:
      return {
        ...state,
        sort: payload,
      }
    case FilterActionKind.SORT_PRODUCTS:
      const { sort, filtered_products } = state
      let tempProducts = [...filtered_products]
      if (sort === 'price-lowest') {
        tempProducts = tempProducts?.sort((a, b) => a.price! - b.price!)
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts?.sort((a, b) => b.price! - a.price!)
      }
      if (sort === 'name-a') {
        tempProducts = tempProducts?.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (sort === 'name-z') {
        tempProducts = tempProducts?.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return {
        ...state,
        filtered_products: tempProducts,
      }
  }
  throw new Error(`No Matching "${type}" -action type`)
}
export default filter_reducer
