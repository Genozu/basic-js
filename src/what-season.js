const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (date.getMonth() <= 4 && date.getMonth() > 1) {
    return 'spring';
  }
  if (date.getMonth() <= 7 && date.getMonth() > 4) {
    return 'summer';
  }
  if (date.getMonth() <= 10 && date.getMonth() > 7) {
    return 'autumn (fall)';
  }
  if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
    return 'winter';
  }
  return "Invalid date!";
}

module.exports = {
  getSeason
};
