function findNextPrime(num){
  for (let i = num+1;;i++){ // main loop
    
    var flag = 0;
    
    for (let j = 2; j < i; j++){
       if (i % j === 0) {
        flag = 1;
        break;
        }
     }
     
     if (flag === 0){
       return i;
     }
    
    
  }// end main loop
  
}

console.log (findNextPrime(11));
var nextPrime = 0;
var num = 2;
for (var i = 0; i < 6 ; i++){
  nextPrime = findNextPrime (num);
  num = nextPrime;
}