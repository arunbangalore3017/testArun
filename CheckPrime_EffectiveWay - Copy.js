var primeNumbers =[];

    for(var i = 2; i < 2000000; i++){
        primeNumbers.push(i);

      }//for loop

      function isPrime(value){
        for(var x=2; x< value/2; x++){

        if(value % x===0){
          return false;
        }

        }//for loop
        return true;
      }//function isPrime to filter

     var sum = primeNumbers.filter(isPrime).reduce(function(acc, val) {
      return acc + val;
    }, 0);


    console.log(sum);