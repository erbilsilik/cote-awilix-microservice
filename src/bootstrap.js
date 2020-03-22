const { readdirSync } = require('fs');
const { join, basename } = require('path');

/**
 * @param {*} container
 */
module.exports = (container) => {
  const files = readdirSync(join(__dirname, '../', 'src/responders'));
  for (let filename of files) {
    const fileBaseName = basename(filename, '.js');
    container.resolve(fileBaseName);
  }
};
