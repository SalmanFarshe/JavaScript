var date = new Date()
// console.log(date.getDay()); // it will return the numeric valu like 0 1 2 3 4 5 6 for every single day
var today = date.getDay();
switch (today) {
    case 0:
        console.log("Today is Sunday");
    break;
    case 1:
        console.log("Today is Monday");
    break;
    case 2:
        console.log("Today is Tuesday");
    break;
    case 3:
        console.log("Today is Wednesday");
    break;
    case 4:
        console.log("Today is Thrusday ");
    break;
    case 5:
        console.log("Today is Friday");
    break;
    case 6:
        console.log("Today is Saterday");
        break;
    default: console.log("Soryy i dont know this day !!");
}