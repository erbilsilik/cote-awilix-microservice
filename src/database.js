const mongoose = require('mongoose');

module.exports = (async (container) => {
  const { db } = container.resolve('config');
  await mongoose.connect(db);

  return mongoose;
})();
