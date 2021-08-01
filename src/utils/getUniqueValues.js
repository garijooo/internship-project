export default (field, array) => {
  const unique = [];
  array.forEach((item) => !unique.includes(item[field]) && unique.push(item[field]));
  return unique;
};
