var http = require('http');
const cote = require('cote');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'json'});
 var url = req.url;
  if (url ==='/') {
    requester.send(request, (user) => {
      res.write(JSON.stringify(user));
      res.end();
    });
  }}).listen(3000, function() {
    console.log("server start at port 3000");
});

const requester = new cote.Requester({ name: 'user responder'});

const request = { type: 'get user responder' };