var resolve = require('resolve');

module.exports = function requireResolve(path, basedir) {
  return resolve.sync(path, { basedir: basedir });
};