var thisIsRunning = true;
var x = 0;
while (thisIsRunning) {
  x++;
  var randomNumber = Math.floor(Math.random() * 100 + 1);
  if (randomNumber === 3) {
    console.log("You are Salman Farshe" + " with " + x);
    thisIsRunning = false;
  } else {
    console.log(
      "you are not the legal user! Fact is " + randomNumber + " with " + x
    );
  }
}