// && , ||, !
// A && B
// true && true = true
// false && false = false
// true && false = false
// false && true = false

var a = 20;
var b = 30;
var c = 40;
var d = 50;

if (a > b && c > d) {
  console.log("it will be loged when both condition will be logically true");
} else {
    console.log("it will be logged when at least one condition is false");
}

if (a > b || c > d) {
  console.log("it will be loged when at least one condition will be logically true");
} else {
    console.log("it will be logged when both condition is false");
}

// ! not logical operator
// not logical operator will convert the false to true and the true to the false!!
var notCheacker = a > b;
console.log(notCheacker);
console.log(!notCheacker);
console.log(!!notCheacker);