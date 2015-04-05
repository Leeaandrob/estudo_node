var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
	if (request.url == "/" || request.url=="/index.html"){
		fs.readFile(__dirname + '/index.html', function(err, html){
					response.writeHeader(200, {'Content-Type': 'text/html'});
					response.end(html);
		});
	}

	else if (request.url == "/artigos.html"){
		fs.readFile(__dirname + '/artigos.html', function(err, html){
			response.writeHeader(200, {'Content-Type': 'text/html'});
			response.end(html);
		});
	}

	else if(request.url == "/contato.html"){
		fs.readFile(__dirname + '/contato.html', function(err, html){
			response.writeHeader(200, {'Content-Type': 'text/html'});
			response.end(html);
		});
	}

	else{
		fs.readFile(__dirname + '/404.html', function(err, html){
			response.writeHeader(200, {'Content-Type': 'text/html'});
			response.end(html);
		});
	}
});
server.listen(3000, function(){
	console.log("WORK!!");
});
