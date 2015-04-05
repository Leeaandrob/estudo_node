var http = require('http');
var file = require('fs');

file.readFile('./arquivos/index.html', function(err, data){
	if (err) throw err;
	console.log(data);
})
