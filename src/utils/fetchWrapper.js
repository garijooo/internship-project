const fetchWrapper = (method) => (url, options = {}) => {
  const updatedOptions = {
    method,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  };
  return fetch(url, updatedOptions);
};

fetch.post = fetchWrapper('POST');
fetch.get = fetchWrapper('GET');
export default fetch;
