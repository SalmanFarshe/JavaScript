// number types
var integerNumber = 25;
var floatNumber = 25.639;
var stringASaNumber = "55546546This text will never printed with number constractor";
console.log(integerNumber);
console.log(floatNumber);
console.log(stringASaNumber);
console.log(parseInt(stringASaNumber));
console.log(Number.parseFloat(integerNumber));
var numberConstractor = Number("22")
console.log(numberConstractor);
// max value cheacker
console.log(Number.MAX_VALUE); //this amount off value can store in javascript
console.log(Number.MIN_VALUE); //this is the most minimal value of a number storage

console.log(Infinity);
console.log(1 / 0);//it will be infinity
console.log("kkk" * 5); // it will be a NAN output, NAN = NOT A NUMBER

var emptyVariable = Number(""); //empty number, it will be 0
console.log(emptyVariable);