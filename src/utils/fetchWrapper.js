const fetchWrapper = (method) => {
  const defaultOptions = {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };
  return (url, options) => fetch(url, { ...options, ...defaultOptions });
};
fetch.post = fetchWrapper('POST');
export default fetch;
