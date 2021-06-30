import { UPDATE_NAVBAR_VIEW, UPDATE_SMTHG_VIEW } from './types';

export const updateNavbarView = (isShown) => ({
  type: UPDATE_NAVBAR_VIEW,
  payload: isShown,
});

export const updateSmthgView = () => ({
  type: UPDATE_SMTHG_VIEW,
});
