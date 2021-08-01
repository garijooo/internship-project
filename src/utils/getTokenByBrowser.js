export default () => (localStorage.getItem('auth-token')
  ? localStorage.getItem('auth-token')
  : sessionStorage.getItem('auth-token'));
