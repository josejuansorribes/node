var express = require('C:\\Users\\jnsb\\Documents\\_Apps\\NodeJSPortable\\App\\NodeJS\\node_modules\\express');
var app = express();

// Formularios

app.get('/preguntas', function(req,res){
	res.send('<html><body>'
			+	'<form method="get" action="/respuesta">'
			+		'¿Quién descubrió América?<br>'
			+		'<input type="text" name="resp" /><br>'
			+		'<input type="submit" value="Enviar"/>'
			+		'<input type="hidden" name="id" value="1"/>'
			+	'</form>'
			+	'<br>'
			+	'<form method="get" action="/respuesta">'
			+		'¿Capital de Portugal?<br>'
			+		'<input type="text" name="resp" /><br>'
			+		'<input type="submit" value="Enviar"/>'
			+		'<input type="hidden" name="id" value="2"/>'
			+	'</form>'
			+'</body></html>');
});

app.get('/respuesta', function(req,res,next){
		var respuesta='';
		if(req.query.id=='1'){
			if(req.query.resp==="Cristobal Colón"){
				console.log("Pregunta 1 acertada");
			}else{
				console.log("Pregunta 1 fallida");
				respuesta='Cristobal Colón';
			}
			res.send(answer(respuesta=='', respuesta));
		}else if(req.query.id=='2'){
			if(req.query.resp==="Lisboa"){
				console.log("Pregunta 2 acertada");
			}else{
				respuesta='Lisboa';
				console.log("Pregunta 2 fallida");
				}
			res.send(answer(respuesta=='', respuesta));
		}
		else{
			res.send('<button onclick="window.location=\'/preguntas\'">Página Incorrecta</button>');
		}
	
});

app.get('*', function(req,res){
	res.send('<button onclick="window.location=\'/preguntas\'">Página Incorrecta</button>');
});


function answer(correcta, respuesta){
	if(correcta){
		return '<html><body>'
			+	'<h1>Respuesta Correcta!</h1>'
			+	'<button onclick="window.location=\'/preguntas\'">Volver</button>'
			+'</body></html>';
	}else{
		return '<html><body>'
			+	'<h1>Respuesta Incorrecta! La respuesta es:' + respuesta + '</h1>'
			+	'<button onclick="window.location=\'/preguntas\'">Volver</button>'
			+'</body></html>';
	}
}
app.listen(8080);
console.log("listening on port 8080");
