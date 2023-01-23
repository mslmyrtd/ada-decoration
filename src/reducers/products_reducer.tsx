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
  }
  throw new Error(`No Matching "${action.type}" -action type`)
}
export default products_reducer
