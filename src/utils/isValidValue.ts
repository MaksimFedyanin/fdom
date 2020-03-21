const isValidValue = (value) => {
  if (typeof value === 'string') {
    if (/[0-9]*(%|px|rem|em)/.test(value)) {
      return true;
    }
  }

  return false;
};

export default isValidValue;
