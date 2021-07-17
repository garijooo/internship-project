import { UPDATE_NAVBAR_VIEW, UPDATE_SEARCHING_VALUE } from './types';

const INITIAL_STATE = {
  navbarIsOpen: true,
  searchingValue: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NAVBAR_VIEW:
      return {
        ...state,
        navbarIsOpen: action.payload,
      };
    case UPDATE_SEARCHING_VALUE:
      return {
        ...state,
        searchingValue: action.payload,
      };
    default:
      return state;
  }
};
