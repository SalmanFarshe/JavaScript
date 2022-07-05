// concatination of b
var firstName = "Salman"
var lastName = "Farshe"
var FullName = firstName.concat(" " , lastName)
console.log(FullName);

var subString = FullName.substring(3, 10) // (from index of , to index of)
console.log(subString); //it will output "man far" from 3 to 10 nomber position

// find the charecter of any positon of a string
console.log(FullName.charAt(8)); //it will outpt the 8th position charecter of fullname
console.log(FullName.startsWith('S'));
console.log(FullName.startsWith('s'));
console.log(FullName.startsWith(''));
console.log(FullName.startsWith(' '));
console.log(FullName.startsWith('Salman'));
console.log(FullName.indexOf("a"));
console.log(FullName.split());
console.log(FullName.split(""));
console.log(FullName.split(" "));