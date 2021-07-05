import { UPDATE_NAVBAR_VIEW, UPDATE_SEARCHING_VALUE } from './types';

export const updateNavbarView = (isOpen) => ({
  type: UPDATE_NAVBAR_VIEW,
  payload: isOpen,
});

export const updateSearchingValue = (searchingValue) => ({
  type: UPDATE_SEARCHING_VALUE,
  payload: searchingValue,
});
