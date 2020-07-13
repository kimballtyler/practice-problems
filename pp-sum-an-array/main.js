function sumArray(numbersArray) {
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}

// test
console.log(sumArray([10, 5, 3, 7, 2]));
