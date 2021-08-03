import fetchWrapper from '../../utils/fetchWrapper';

import {
  SIGN_OUT,
  UPDATE_USER,
  UPDATE_STREAMS,
} from './types';

export const signOut = () => ({
  type: SIGN_OUT,
});

export const updateUserState = (ID, email, firstname, lastname) => ({
  type: UPDATE_USER,
  payload: {
    ID,
    email,
    firstname,
    lastname,
  },
});

export const fetchUser = (token) => async (dispatch) => {
  try {
    const data = await fetchWrapper.get(
      '/api/Account/GetUserProfile',
      { Authorization: `Bearer ${token}` },
    );
    const {
      id, email, name,
    } = data;
    const list = name.split(' ');
    dispatch(updateUserState(id, email, list[0], list[1]));
  } catch (err) {
    console.log(err);
  }
};

export const updateStreams = (streams) => ({
  type: UPDATE_STREAMS,
  payload: streams,
});

export const fetchStreams = (token) => async (dispatch) => {
  try {
    const data = await fetchWrapper.get('/api/Stream/GetStreams', {
      Authorization: `Bearer ${token}`,
    });
    dispatch(updateStreams(data));
  } catch (err) {
    console.log(err);
  }
};
