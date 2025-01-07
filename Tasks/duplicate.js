const duplicate = (value, num) => {
  if (num <= 0) return [];
  return Array(num).fill(value);
};

module.exports = duplicate;
