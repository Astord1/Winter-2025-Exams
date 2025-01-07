// Refactor following solution
// Get day number

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (dayInput) => {
  const index = days.findIndex(day => dayInput.startsWith(day.toLowerCase()));
  return index !== -1 ? index + 1 : -1;
};

module.exports = parseDay;
