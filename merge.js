var fs = require('fs'); // importa módulo file systemLanguage
if(process.argv.length<5){
	console.log("	syntax: 'node merge.js <dest> <f1> <f2>...<fn>'");
	process.exit();
}

var files = process.argv.length - 2;

for(var i=3; i< process.argv.length; i++){
	fs.readFile(
		process.argv[i],
		function(err,data){
			fs.appendFile(
				process.argv[2], data,
				function (err){
					if(err) throw err;
					console.log('files appened');
				}
		}
}
