const cote = require('cote');
const { createContainer, Lifetime, asValue } = require('awilix');

const container = createContainer();

// container.register('config', asValue(config));

container.register('cote', asValue(cote));

container.loadModules(
  ['models/*.js'],
  {
    cwd: __dirname,
    formatName: 'camelCase',
  }
);

container.loadModules(
  ['repositories/*.js'],
  {
    cwd: __dirname,
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
  }
);

container.loadModules(
  ['responders/*.js'],
  {
    cwd: __dirname,
    formatName: 'camelCase'
  }
);

container.loadModules(
  ['services/*.js'],
  {
    cwd: __dirname,
    formatName: 'camelCase'
  }
);

module.exports = container;
