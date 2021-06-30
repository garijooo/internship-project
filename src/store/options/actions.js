import { UPDATE_NAVBAR_VIEW, UPDATE_SMTHG_VIEW } from './types';

export const updateNavbarView = (isOpen) => ({
  type: UPDATE_NAVBAR_VIEW,
  payload: isOpen,
});

export const updateSmthgView = () => ({
  type: UPDATE_SMTHG_VIEW,
});
