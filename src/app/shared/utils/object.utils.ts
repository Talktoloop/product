export const checkIfHasValue = (value: object | [] | string | boolean | number): boolean => {
  if (!value) {
    return false;
  }
  if (Array.isArray(value)) {
    return value.some((singleValue) => checkIfHasValue(singleValue));
  } else if (typeof value === 'object') {
    return Object.keys(value).some((key) => checkIfHasValue(value[key]));
  } else {
    return !!value || value === 0;
  }
};
