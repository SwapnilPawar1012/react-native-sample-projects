import {
  ADD_TO_CART,
  GET_USER_LIST,
  REMOVE_FROM_CART,
  SET_USER_DATA,
} from './constants';

export function addToCart(item: any) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeFromCart(item: number) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function getUserList() {
  return {
    type: GET_USER_LIST, // USER_LIST
  };
}

export const setUserData = (data: any) => {
  return {type: SET_USER_DATA, data};
};
