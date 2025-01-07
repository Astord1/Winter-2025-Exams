const copyListed = (dict, ...keys) => {
  for (let k in dict) {
    if (!keys.includes(k)) delete dict[k];
  }
  return dict;
};

module.exports = copyListed;
