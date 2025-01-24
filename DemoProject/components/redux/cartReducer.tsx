import {ADD_TO_CART, REMOVE_FROM_CART} from './constants';

const initialState: any[] = [];

export const cartReducer = (state = initialState, action: any): any[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_FROM_CART:
      const itemToRemove = action.data; // Get the item name to remove

      // Find the index of the item in the state array
      const itemIndex = state.findIndex(
        (element: any) => element.name === itemToRemove,
      );

      // Check if the item exists in the cart (index !== -1)
      if (itemIndex !== -1) {
        // Create a copy of the state array to avoid mutation
        const newState = [...state];

        // Remove the item at the specific index
        newState.splice(itemIndex, 1);

        // Return the updated state
        return newState;
      } else {
        // Item not found, handle the case (optional)
        console.warn(`Item "${itemToRemove}" not found in the cart.`);
        return state; // Or return a copy of the original state
      }

    default:
      return state;
  }
};
