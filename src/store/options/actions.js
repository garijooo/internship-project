import UPDATE_NAVBAR_VIEW from './types';

export default (isOpen) => ({
  type: UPDATE_NAVBAR_VIEW,
  payload: isOpen,
});
