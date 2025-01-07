const dropKeys = (dict, ...keys) => {
  const result = { ...dict };
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key in result) {
      delete result[key];
    }
  }

  return result;
};

module.exports = dropKeys;
