var arr = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr);
arr.pop() //it will remove the last index value value
console.log(arr);
arr.push(100) // it will insert into the last index value
console.log(arr);
arr[1] = "2 is replaced by this string" // it will replace the value with -1
console.log(arr);
arr.unshift("this text is always on the 1st") // added to the 1st index value
console.log(arr);
arr.shift() // remove the 1st index value
console.log(arr);


//  splice is more flexible
arr.splice(2, 1, 33) // it will remore the 5 nomber index value and added 55 to the same index
console.log(arr);
arr.splice(5, 0, 55, 56, 57) // it will never remore the 5 nomber index value and added 55 from the same index
console.log(arr);