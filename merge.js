var fs = require('fs'); // importa módulo file systemLanguage
if(process.argv.length<5){
	console.log("	syntax: 'node merge.js <dest> <f1> <f2>...<fn>'");
	process.exit();
}

/* Lectura/Escritura asincrona */
for(var i=3; i< process.argv.length; i++){
	fs.readFile(
		process.argv[i],
		function(err,data){
			fs.appendFile(
				process.argv[2], data,
				function (err){
					if(err) throw err;
					console.log('file appened');
				});
		});
}

/* Lectura/Escritura sincrona*/
for(var i=3; i< process.argv.length; i++){
	var data =fs.readFileSync(process.argv[i]);
	fs.appendFileSync('sync_'+process.argv[2],data);

}
