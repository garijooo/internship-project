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
      id, email, firstName, lastName,
    } = await response.json();
    dispatch({
      type: FETCH_USER,
      payload: {
        ID: id,
        email,
        firstname: firstName,
        lastname: lastName,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const signOut = () => ({
  type: SIGN_OUT,
});
