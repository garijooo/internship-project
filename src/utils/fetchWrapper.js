const apiRequestMaker = (method) => async (url, options, body) => {
  let updatedOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  switch (method) {
    case 'POST':
      updatedOptions = {
        ...updatedOptions,
        body: JSON.stringify({ ...body }),
      };
      break;
    default:
      break;
  }
  updatedOptions = {
    ...updatedOptions,
    headers: {
      ...updatedOptions.headers, ...(options ?? {}),
    },
  };
  console.log(updatedOptions);
  const response = await fetch(url, updatedOptions);
  const data = await response.json();
  console.log(data);
  return data;
};

const fetchWrapper = {
  post: apiRequestMaker('POST'),
  get: apiRequestMaker('GET'),
};

export default fetchWrapper;
