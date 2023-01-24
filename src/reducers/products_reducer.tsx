import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions'
import { ProductActionKind, ProductAction } from "../types/globaltypes.types"


interface ProductState { }

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
      const featured_products = action?.payload?.filter((product: any) => product.featured === true)
      console.log(featured_products);
      return { ...state, products_loading: false, products: action.payload, featured_products }
    case ProductActionKind.GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true }
  }
  throw new Error(`No Matching "${action.type}" -action type`)
}
export default products_reducer
