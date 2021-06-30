import { SIGN_OUT, FETCH_USER } from './types';

const INITIAL_STATE = {
  ID: '',
  email: '',
  firstname: '',
  lastname: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        ID: action.payload.ID,
        email: action.payload.email,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    case SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
