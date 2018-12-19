var sum = 0;

function checkPrime(num){
  var a = 0;
  var flag = 0;
  a = Math.floor(num / 2);
  for (let j = 2; j < a; j++){
    if (num % j === 0) {
      flag = 1;
      break;
    }
  }
  return flag;
  // return 0 if prime
  // return 1 if prime
}

//console.log(checkPrime(101));

for (let i=2; i < 2000000; i++){
  if (checkPrime (i) === 1){
    sum = sum + i;
  }
}
console.log (sum);
