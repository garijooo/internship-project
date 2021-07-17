import jwtDecode from 'jwt-decode';

export default (token) => {
  const { Email } = jwtDecode(token);
  return Email;
};
