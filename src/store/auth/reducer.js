import { SIGN_OUT, UPDATE_USER, UPDATE_STREAMS } from './types';

const INITIAL_STATE = {
  ID: '',
  email: '',
  firstname: '',
  lastname: '',
  streams: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ID: action.payload.ID,
        email: action.payload.email,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    case SIGN_OUT:
      return INITIAL_STATE;
    case UPDATE_STREAMS:
      return { ...state, streams: action.payload };
    default:
      return state;
  }
};
