var arrayLearning = [] //this is an empty array and this is very basic declaration
// we can store multiple data in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] // loteral array
console.log(arr);
console.log(arr[1]);
console.log(arr[20]);
console.log(arr[19]); // this is the last positioned array value
console.log(arr[arr.length - 1]); // this is also the last

// push new data in an array
arr[5] = "salman"
console.log(arr);
console.log(arr[5]);

// intering empty
arr[100] = "i am 100 in array"
console.log(arr); // 80 empty itemps
console.log(arr[100]);

// length of an array
console.log(arr.length);

var newArray = Array() // the constractive way to declire an array
console.log(newArray);