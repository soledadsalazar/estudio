//funciones dentro de funciones
var landscape = function() {
  var result = "landscape\t";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "flat\t";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "mountain\t";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};
//llamado a funciones
console.log(landscape());


//cambio de funciones
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

var min = function(a, b) {
	if(a<b)
	{
		return a;
	}
		return b;
};
//llamado a funciones
console.log(min(0, 10));
console.log(min(0, -10));

//Ve si numero es par
var isEven = function(n){
	//console.log("n: "+n);
	if(n == 0){
		return true;
	}else if(n == 1){
		return false;
	}else{
		return isEven(n-2);
	}
};

console.log(isEven(50));
console.log(isEven(75));
//console.log(isEven(-1));

var countBs = function(a){
	var countB = 0;
	for(var i=0; i< a.length; i++){
		if(a.charAt(i) =="B"){
			countB++;
		}
	}
	return countB;
};


var countChar = function(a, b){
	var count = 0;
	for(var i=0; i< a.length; i++){
		if(a.charAt(i) == b){
			count++;
		}
	}
	return count;
};


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
