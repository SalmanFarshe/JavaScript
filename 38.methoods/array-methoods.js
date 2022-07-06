var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr);

// join methood
console.log(arr.join(""));
console.log(arr.join(" "));
console.log(arr.join(","));
console.log(arr.join(", "));
console.log(arr.join(" , "));
console.log(arr.join(" / "));

// fill methood
console.log(arr.fill(true));
console.log(arr.fill(false));
console.log(arr.fill("salman farshe"));

// concat
arr1 = [1,2,3]
arr2 = [4, 5, 6]
arr = arr1.concat(arr2)
console.log(arr);

// is array methood
console.log(Array.isArray(arr));
var str = 5;
console.log(Array.isArray(str));

// from array methood
var a = [1, 2, 3]
var b = Array.from(a)
console.log(a);
a[1] = 5;
console.log(a);

console.log(b);
b[1] = 5; 
console.log(b);