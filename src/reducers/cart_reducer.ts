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
            if (newAmount > Number(cartItem.max)) {
              newAmount = cartItem.max
            }
            return { ...cartItem, amount: newAmount }
          } else {
            return cartItem
          }
        })
        return { ...state, cart: tempCart }
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
    case FilterActionKind.REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== payload)
      return {
        ...state,
        cart: tempCart,
      }
    case FilterActionKind.CLEAR_CART:
      return {
        ...state,
        cart: [],
      }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
