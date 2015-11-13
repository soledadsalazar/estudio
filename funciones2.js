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