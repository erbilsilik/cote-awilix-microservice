const cote = require('cote');

const requester = new cote.Requester({ name: 'user responder'});

const request = { type: 'get user responder' };

requester.send(request, (res) => {
  console.log(res);
});