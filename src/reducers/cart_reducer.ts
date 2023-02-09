import { FilterActionKind, FilterAction } from '../types/globaltypes.types'
import { InitialStateType } from '../context/cart_context'

const cart_reducer = (state: InitialStateType, action: FilterAction) => {
  const { type, payload } = action
  switch (type) {
    case FilterActionKind.ADD_TO_CART:
      const { id, color, amount, product } = payload
      const tempItem = state.cart.find((i) => i.id === id + color)
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return { ...cartItem, amount: newAmount }
          } else {
            return cartItem
          }
        })
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
