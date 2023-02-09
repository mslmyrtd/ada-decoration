import { FilterActionKind, FilterAction } from '../types/globaltypes.types'
import { InitialStateType } from '../context/cart_context'

const cart_reducer = (state: InitialStateType, action: FilterAction) => {
  const { type, payload } = action
  switch (type) {
    case FilterActionKind.ADD_TO_CART:
      const { id, color, amount, product } = payload
      console.log(id, color, amount, product)
      const tempItem = state.cart.find((i) => i.id === id + color)
      if (tempItem) {
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        }
        return { ...state, cart: [...state.cart, newItem] }
      }
      return {
        ...state,
      }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
