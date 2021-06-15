const fetchWrapper = (method) => {
  const defaultOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return (url, options) => {
    const updatedOptions = { ...options, ...defaultOptions };
    if (method === 'GET') {
      updatedOptions.headers = { ...updatedOptions.headers, ...options.headers };
    }
    return fetch(url, updatedOptions);
  };
};
fetch.post = fetchWrapper('POST');
fetch.get = fetchWrapper('GET');
export default fetch;
