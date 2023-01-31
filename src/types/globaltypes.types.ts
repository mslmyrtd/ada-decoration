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
  stars?: number
  reviews?: number
  id?: string
  company?: string
  images?: IImages[]
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
