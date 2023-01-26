import { ProductActionKind, ProductAction } from '../types/globaltypes.types'

interface ProductState {}

const products_reducer = (state: ProductState, action: ProductAction) => {
  const { type, payload } = action
  switch (type) {
    case ProductActionKind.SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true }
    case ProductActionKind.SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false }
    case ProductActionKind.GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true }
    case ProductActionKind.GET_PRODUCTS_SUCCESS:
      const featured_products = payload?.filter(
        (product: any) => product.featured === true
      )
      return {
        ...state,
        products_loading: false,
        products: payload,
        featured_products,
      }
    case ProductActionKind.GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true }
    case ProductActionKind.GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      }
    case ProductActionKind.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        single_product: payload,
      }
    case ProductActionKind.GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      }
  }
  throw new Error(`No Matching "${action.type}" -action type`)
}
export default products_reducer
