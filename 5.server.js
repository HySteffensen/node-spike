function handleHTTP(req, res) {
    if (req.method === "GET") {
        if (req.url === "/"){
            res.writeHead(200, { "Content-type": "text/plain" });

            ASQ(function(done) {
                setTimeout(function() {
                    done(Math.random());
                }, 1000);
            })
            .then(function(done, msg) {
                setTimeout(function() {
                    done(msg);
                }, 2000);
            })
            .then(function(_, msg) {
                res.end("Hello World: " + msg);
            });
        } else {
            res.writeHead(403);
            res.end("Get outta here!");
        }
    } else {
        res.writeHead(403);
        res.end("Get outta here!");
    }
}

var host = "localhost";
var port = 8006;

var http = require("http");
var http_serv = http.createServer(handleHTTP).listen(port, host);

var ASQ = require("asynquence");