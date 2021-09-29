const stringLength = (str) => {
  const length = str.length;
  if (length >= 1 && length <= 10) {
    return length;
  } else {
    throw new Error('Invalid string');
  }
}

module.exports = stringLength;