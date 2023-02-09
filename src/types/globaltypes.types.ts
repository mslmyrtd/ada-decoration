export interface ILinks {
  id: number
  text: string
  url: string
  icon: any
}
export interface IServices {
  id: number
  icon: any
  title: string
  text: string
}
export interface InputProviderProps {
  children: React.ReactNode
}

export interface IImages {
  id: string
  width: number
  heigh: number
  url: string
  size: number
  type: string
  thumbnails: any
  filename: string
}
export interface IProduct {
  name?: string
  price: number
  description?: string
  stock: number
  stars: number
  reviews?: number
  id?: string
  company?: string
  images?: IImages[]
  colors: string[]
}
export interface IObject {
  category: string
  colors: Array<string>
  company: string
  description: string
  id: string
  image: string
  name: string
  price?: number
  shipping: boolean
  featured: boolean
}
export enum ProductActionKind {
  SIDEBAR_CLOSE = 'SIDEBAR_CLOSE',
  SIDEBAR_OPEN = 'SIDEBAR_OPEN',
  GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
  GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN',
  GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS',
  GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR',
}
export interface ProductAction {
  type: ProductActionKind
  payload?: number | string | Record<string | number, unknown>[]
}

export enum FilterActionKind {
  SET_LISTVIEW = 'SET_LISTVIEW',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  SET_GRIDVIEW = 'SET_GRIDVIEW',
  UPDATE_SORT = 'UPDATE_SORT',
  SORT_PRODUCTS = 'SORT_PRODUCTS',
  UPDATE_FILTERS = 'UPDATE_FILTERS',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
  ADD_TO_CART = 'ADD_TO_CART',
  CLEAR_CART = 'CLEAR_CART',
  COUNT_CART_TOTALS = 'COUNT_CART_TOTALS',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  TOGGLE_CART_ITEM_AMOUNT = 'TOGGLE_CART_ITEM_AMOUNT',
}
export interface FilterAction {
  type: FilterActionKind
  payload?: any | Record<string | number, unknown>[]
}
