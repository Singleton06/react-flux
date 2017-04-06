var http = require('http');

var options = {
  host: 'example.com',
  port: 80,
  path: '/foo.html'
};

http.get(options, function(resp){
  resp.on('data', function(chunk){
    console.log(chunk);
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});