import jwtDecode from 'jwt-decode';

export default (token) => {
  const { nameid } = jwtDecode(token);
  return nameid;
};
