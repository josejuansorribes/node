function agenda(titulo, inic){
	var _titulo = titulo;
	var _contenido = inic;
	return {
		titulo: function() {return _titulo;},
		meter: function(nombre,tf){_contenido[nombre]=tf;},
		tf: function(nombre) {return _contenido[nombre];},
		borrar: function(nombre){ delete _contenido[nombre];},
		toJSON:function(){return JSON.stringify(_contenido);},
		listar:function(){
			var str='';
			for(var i in _contenido){
				str+= i + ', ' + _contenido[i] + '\n';
			}
			console.log(str);
		}
	}
}

var amigos= agenda("Amigos",{'Pepe':113278561, 'José': 157845234,'Jesús': 178512355});
amigos.listar(); 
