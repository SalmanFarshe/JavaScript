var searchableArray = [225, 26, 88, 16, 24, 125, 96, 64, 84, 25];
console.log(searchableArray);
var findData = 88;
var notFound = true;
for (var i = 0; i < searchableArray.length; i++) {
  if (findData === searchableArray[i]) {
    console.log(
      "yes this value is on the index of " + searchableArray.indexOf(findData) + " which is " + findData
    );
    var notFound = false;
    break;
  } 
}
if (notFound) {
    console.log("Sorry data not found");
}