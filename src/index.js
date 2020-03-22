// require('./database');
const container = require('./container');
const resolveResponders = require('./bootstrap');

async function main() {
  resolveResponders(container);
}

main().catch(console.log);
