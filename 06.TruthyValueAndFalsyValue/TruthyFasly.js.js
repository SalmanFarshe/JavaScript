//  '', 0, null, undefined, NAN this are alws falsy value in js
var x = (1 * "fdf")
console.log(x); // this is nan value
console.log(Boolean(0)); //falsy value
console.log(Boolean(x)); //falsy value
console.log(Boolean(null)); //falsy value
console.log(Boolean("")); //falsy value
console.log(Boolean(undefined)); //falsy value

console.log(Boolean(Infinity)); //truthy value
console.log(Boolean(-Infinity)); //truthy value
console.log(Boolean(1)); //truthy value