import { InitialStateType } from '../context/filter_context'
import { FilterActionKind, FilterAction } from '../types/globaltypes.types'

const filter_reducer = (state: InitialStateType, action: FilterAction) => {
  const { type, payload } = action
  switch (type) {
    case FilterActionKind.LOAD_PRODUCTS:
      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
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
  }
  throw new Error(`No Matching "${type}" -action type`)
}
export default filter_reducer
