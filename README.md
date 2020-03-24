# Cote-Awilix Microservice

## Components
- Cote (http://cote.js.org)
- Awilix (https://github.com/jeffijoe/awilix)
- PM2 (https://pm2.keymetrics.io/)

## Structure
Below is the project structure and what are the responsibilities of each layer.
```
./bin                             # scripts
└── index.js                      # entrypoint for the app

./src                             # source code
├── models                        # model definitions
├── repositories                  # repositories
├── responders                    # cote responders
├── services                      # services that use repositories
└── bootstrap.js                  # resolves responders
└── container.js                  # auto-loads modules, register cote 
└── index.js                      # entrypoint for the app, responsible for bootstrapping
```