function sumArray(numberArray) {
    let total = 0;
    numberArray.forEach(function(i) {
      total = total + i;
    });
    return total;
  }
  sumArray([1, 2, 3]); //=> 6
  