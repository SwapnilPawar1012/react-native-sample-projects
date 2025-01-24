import {ADD_TO_CART, REMOVE_FROM_CART} from './constants';
// interface CartItem {
//   id: string;
//   name: string;
//   imageUrl: string;
//   originalPrice: number;
//   discountPrice: number;
//   offerPercentage: number;
//   rating: number;
//   ratingCount: number;
//   tags: string[];
// }
const initialState: any[] = [];

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const itemToRemove = action.payload;

      const itemIndex = state.findIndex(
        (element: any) => element.id === itemToRemove,
      );

      if (itemIndex !== -1) {
        const newState = [...state];

        // Correctly remove the item at the specific index
        newState.splice(itemIndex, 1);

        return newState;
      } else {
        console.warn(`Item "${itemToRemove}" not found in the cart`);
        return state;
      }

    default:
      return state;
  }
};
