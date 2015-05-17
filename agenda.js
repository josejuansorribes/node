function agenda(titulo, inic){
	var _titulo = titulo;
	var _contenido = inic;
	return {
		titulo: function() {return _titulo;},
		meter: function(nombre,tf){_contenido[nombre]=tf;},
		tf: function(nombre) {return_contenido[nombre];},
		borrar: function(nombre){ delete_contenido[nombre];},
		toJSON:function(){return JSON.stringify(_contenido);}
	}
}

var amigos= agenda("Amigos",{Pepe:113278561,José: 157845234, Jesús: 178512355});

 
