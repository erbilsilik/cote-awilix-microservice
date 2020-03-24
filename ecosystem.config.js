module.exports = {
  apps : [
    {
      name: 'Responders',
      script: 'bin/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'Client',
      script: 'client/userClient.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
    },
  ],
};
