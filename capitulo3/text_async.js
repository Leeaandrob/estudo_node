var fs = require('fs');
for (var i=1; 1 <=5; i++){
	var file = "aysnc-txt" + i + ".txt";
	fs.writeFile(file, "Hello node.js!", function(err, out){
		console.log(out);
	});
}
