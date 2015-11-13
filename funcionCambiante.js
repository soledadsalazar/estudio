function prueba(original){

	if (original== true){
	var funcionCambiante = function(value) {
	  console.log("bebe");
	};
	}else{
	  funcionCambiante = function(value) {
		console.log("cambio");
	  };
  }
  funcionCambiante(original);
};
//llamado a funciones
prueba(false);