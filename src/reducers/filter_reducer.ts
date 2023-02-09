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
    case FilterActionKind.UPDATE_FILTERS:
      const { name, value } = payload
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      }
    case FilterActionKind.FILTER_PRODUCTS:
      const { all_products } = state
      const { text, company, color, category, shipping, price } = state.filters

      let tempAllProducts = [...all_products]
      if (text) {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product?.name.toLowerCase().startsWith(text)
        })
      }
      if (category !== 'all') {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product?.category === category
        })
      }
      if (company !== 'all') {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product.company === company
        })
      }
      if (color !== 'all') {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product.colors.find((c: string) => c === color)
        })
      }

      tempAllProducts = tempAllProducts.filter((product) => {
        return product.price <= price
      })

      if (shipping) {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product?.shipping === true
        })
      }
      return {
        ...state,
        filtered_products: tempAllProducts,
      }
    case FilterActionKind.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          shipping: false,
          price: state.filters.max_price,
        },
      }
  }
  throw new Error(`No Matching "${type}" -action type`)
}
export default filter_reducer
