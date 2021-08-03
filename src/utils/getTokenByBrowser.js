export default () => (localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token'));
