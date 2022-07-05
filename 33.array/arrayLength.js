var example_array = [1, 2, 3, 4, 5, 7, 8, "s", "a", "l","m","a","n","f","a","r","s","h","e"]
var count = 0
while (true) {
    if (example_array[count] === undefined) {
        break;
    } else {
        count++
    }
}
console.log(count);
console.log(example_array.length);