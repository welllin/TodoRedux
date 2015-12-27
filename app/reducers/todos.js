import { ADD_ITEM, REMOVE_ITEM } from '../constants/appConstants';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        action.item,
        ...state
      ]

    case REMOVE_ITEM:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    default:
      return state
  }
}
