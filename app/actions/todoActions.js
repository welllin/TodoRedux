import * as types from '../constants/appConstants';

export function addItem(item) {
  return { type: types.ADD_ITEM, item }
}

export function removeItem(index) {
  return { type: types.REMOVE_ITEM, index }
}
