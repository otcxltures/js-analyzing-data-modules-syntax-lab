module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
const datejs = require('datejs');

function combineUsers(...args) {
  // initialize return object
  let combinedObject = {
    users: []
  };

  // loop through args and merge arrays
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // add current date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = combineUsers;