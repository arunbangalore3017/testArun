// program to find sum of all primes less than 2000000
// program is in node js 
var sum = 0;
var num = 0;
var flag = 0;
for (let i = 2; i < 2000000; i++){ // main loop
  num = Math.floor(i / 2);
  flag = 0;
  for (let j=2; j < num; j++){// inner for loop
      if (i%j === 0){
        flag = 1;
        break;
      }
    }                         // end of inner loop
    if (flag === 0){
      sum = sum + i;
    }
} // end of main loop
console.log (sum);