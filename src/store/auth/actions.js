import fetchWrapper from '../../utils/fetchWrapper';

import {
  SIGN_OUT,
  UPDATE_USER,
} from './types';

export const updateUserState = (ID, email, firstname, lastname) => ({
  type: UPDATE_USER,
  payload: {
    ID,
    email,
    firstname,
    lastname,
  },
});

export const fetchUser = (Email, token) => async (dispatch) => {
  try {
    const data = await fetchWrapper.get(`/api/user?email=${Email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {
      id, email, firstName, lastName,
    } = data;
    dispatch(updateUserState(id, email, firstName, lastName));
  } catch (err) {
    console.log(err);
  }
};

export const signOut = () => ({
  type: SIGN_OUT,
});
