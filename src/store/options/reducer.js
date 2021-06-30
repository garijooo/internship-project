import { UPDATE_NAVBAR_VIEW } from './types';

const INITIAL_STATE = {
  navbarIsOpen: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NAVBAR_VIEW:
      return {
        ...state,
        navbarIsOpen: action.payload,
      };
    default:
      return state;
  }
};
