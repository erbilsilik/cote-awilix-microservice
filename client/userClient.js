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
  }}).listen(process.env.PORT || 5000, function() {
    console.log("server start at port 5000");
});

const requester = new cote.Requester({ name: 'user responder'});

const request = { type: 'get user responder' };