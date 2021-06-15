import fetch from '../../utils/fetchWrapper';

import {
  SIGN_OUT,
  FETCH_USER,
} from './types';

export const fetchUser = (Email, token) => async (dispatch) => {
  try {
    const response = await fetch.get(`/api/user?email=${Email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {
      ID, email, firstname, lastname,
    } = await response.json();
    dispatch({
      type: FETCH_USER,
      payload: {
        ID,
        email,
        firstname,
        lastname,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const signOut = () => ({
  type: SIGN_OUT,
});
