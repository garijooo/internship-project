const apiRequestMaker = (method) => (url, options = {}) => {
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

const fetchWrapper = {};
fetchWrapper.post = apiRequestMaker('POST');
fetchWrapper.get = apiRequestMaker('GET');

export default fetchWrapper;
