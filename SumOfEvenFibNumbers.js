var currFibNum = 0;
var a = 1;
var b = 2;
var fibEvenSum = 2;

do{
  
  currFibNum = a + b;
  console.log (currFibNum);

  if (currFibNum % 2 === 0){
    fibEvenSum = fibEvenSum + currFibNum ;
  }
  
  a = b;
  b = currFibNum;
  
  if (a > 40) {
    break;
  }
  
}while (true);

console.log (fibEvenSum);