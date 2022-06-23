var sum = 0;
for (i = 1; i <= 5; i++){
    console.log(sum + " + " + i + " = " + (sum + i));
    sum += i;
}
console.log(sum);