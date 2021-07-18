const apiRequestMaker = (method) => async (url, options = {}) => {
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
  const response = await fetch(url, updatedOptions);
  const data = await response.json();
  return data;
};

const fetchWrapper = {
  post: apiRequestMaker('POST'),
  get: apiRequestMaker('GET'),
};

export default fetchWrapper;
