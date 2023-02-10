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
    case FilterActionKind.TOGGLE_CART_ITEM_AMOUNT:
      const { identify, value } = payload
      const toggleCart = state.cart.map((item) => {
        if (item.id === identify) {
          if (value === 'inc') {
            let newAmount = Number(item.amount) + 1
            if (newAmount > Number(item.max)) {
              newAmount = Number(item.max)
            }
            return { ...item, amount: newAmount }
          }
          if (value === 'dec') {
            let newAmount = Number(item.amount) - 1
            if (newAmount < 1) {
              newAmount = 1
            }
            return { ...item, amount: newAmount }
          }
        }
        return item
      })
      return { ...state, cart: toggleCart }
    case FilterActionKind.COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem
          total.total_amount += Number(price) * Number(amount)
          total.total_items += Number(amount)
          return total
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      )
      return {
        ...state,
        total_items,
        total_amount,
      }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
