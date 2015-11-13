var doh = "Doh";
console.log("types\n");
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

//array
var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log("array\n");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

//objects
var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running",
           "television"]
};
console.log(day1.squirrel);
console.log(day1.events[2]);

var anObject = {left: 1, right: 2};
console.log("objects\n");
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

//maps
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}
console.log("maps\n");
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"]);

// ejercicios.
var range = function(a,b,c){
	if(c == undefined){
		console.log("c: "+c);
		c=1;
	}
	var arr = [];
	var condition = true;
	var evalua;
	if(a < b){
	  evalua = function(){
		for(var i=a; i <=b; i+=c){
			arr.push(i);
		}
	  };
	}else{	
		evalua = function(){
		for(var i=a; i >=b; i+=c){
			arr.push(i);
		}
	  };
	}
	evalua();
	return arr;
};

var sum = function(arr){
	var sum = 0;
	for(var i = 0; i< arr.length; i++){
		sum+=arr[i];
	}
	return sum;
};

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]