import UPDATE_NAVBAR_VIEW from './types';

const updateNavbarView = (isOpen) => ({
  type: UPDATE_NAVBAR_VIEW,
  payload: isOpen,
});

export default updateNavbarView;
