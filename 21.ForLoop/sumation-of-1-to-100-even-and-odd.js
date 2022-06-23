// find the all sumation of even numbers from 1 to 100
var sum1 = 0;
for (x = 1; x <= 100; x++){
    if (x % 2 === 0) {
        // console.log(x);
        sum1 = sum1 + x;
    }
}
console.log("The sumation of all even number's from 1 to " + (x - 1) + " is " + sum1);


// find the all sumation of odd numbers from 1 to 100
var sum2 = 0;
for (y = 1; y <= 100; y++){
    if (y % 2 === 0) {
        // console.log(y);
        sum2 = sum2 + y;
    }
}
console.log("The sumation of all even number's from 1 to " + (y - 1) + " is " + sum2);