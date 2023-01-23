import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions'

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

export enum ProductActionKind {
  SIDEBAR_CLOSE = 'SIDEBAR_CLOSE',
  SIDEBAR_OPEN = 'SIDEBAR_OPEN',
}
export interface ProductAction {
  type: ProductActionKind
  payload?: number | string
}
