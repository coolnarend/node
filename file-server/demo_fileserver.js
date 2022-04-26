// Node.js File Server
// Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server. Let us combine the two, and serve the file requested by the client.
// Create two html files and save them in the same folder as your node.js files.


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
       if(err) {
           res.writeHead(404, {'Content-Type': 'text/html'});
           return res.end('404 Not Found');
       }
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(data);
       return res.end();
    });
}).listen(8000);
