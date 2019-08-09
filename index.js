const pkg = require('./package.json');
const register = require('./src/middleware-wrapper');

module.exports.plugin = {
  register,
  name: 'hapi-status-monitor',
  pkg,
};
