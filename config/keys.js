// keys.js - determine credentials to return based on environment
if (process.env.NODE_ENV === 'production') {
  // return the prod set of keys
  module.exports = require('./prod');
}  else {
  // return the dev set of keys
  module.exports = require('./dev');
}