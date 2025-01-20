import {SET_USER_DATA} from './constants';
// Define the type of your state (can be specific or `any[]` if flexibility is needed)
type StateType = any[]; // Replace `any` with your specific type if possible

// Initialize the state
const initialState: StateType = [];

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return [...state, action.data];

    default:
      return state;
  }
};
