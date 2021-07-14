const apiRequestMaker = (method) => (url, options = {}) => {
  let updatedOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  switch (method) {
    case 'POST':
      updatedOptions = { ...updatedOptions, body: JSON.stringify({ ...options }) };
      break;
    case 'GET':
      updatedOptions = {
        ...updatedOptions,
        headers: {
          ...updatedOptions.headers, ...(options.headers ?? {}),
        },
      };
      break;
    default:
      break;
  }
  return fetch(url, updatedOptions);
};

const fetchWrapper = {
  post: apiRequestMaker('POST'),
  get: apiRequestMaker('GET'),
};

export default fetchWrapper;
