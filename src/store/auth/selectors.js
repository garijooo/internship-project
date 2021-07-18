import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

export default createSelector(
  [selectAuth],
  (auth) => auth.streams,
);
