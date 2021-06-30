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

const fetchWrapper = {
  post: apiRequestMaker('POST'),
  get: apiRequestMaker('GET'),
};

export default fetchWrapper;
