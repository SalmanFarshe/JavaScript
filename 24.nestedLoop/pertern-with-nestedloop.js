/**
 *    1
 *    1 2
 *    1 2 3
 *    1 2 3 4
 *    1 2 3 4 5
 */
var num = 15;
for (var i = 1; i <= num; i++){
    rslt = ""
    for (var x = 1; x <= i; x++){
        rslt = rslt + x + " "
    }
    console.log(rslt);
}
/**
 *    *
 *    * *
 *    * * *
 *    * * * *
 *    * * * * *
 */
for (var i = 1; i <= num; i++){
    rslt = ""
    for (var x = 1; x <= i; x++){
        rslt = rslt + "-" + " "
    }
    console.log(rslt);
}
/**
 *    * * * * *
 *    * * * * *
 *    * * * * *
 *    * * * * *
 *    * * * * *
 */
for (var i = 1; i <= num; i++) {
  rslt = "";
  for (var x = 1; x <= num; x++) {
    rslt = rslt + "*" + " ";
  }
  console.log(rslt);
}

for (var i = 1; i <= num; i++) {
  rslt = "";
  for (var x = 1; x <= num; x++) {
    rslt = rslt + x + " ";
  }
  console.log(rslt);
}