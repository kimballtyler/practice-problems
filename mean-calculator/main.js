function meanCalculator(numbersArray) {
  var mean = 0;
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  mean = sum / numbersArray.length;
  return Math.round((mean + 0.00001) * 100) / 100;
}
//test
console.log(meanCalculator([1, 2, 3, 4, 5]));
console.log(meanCalculator([7, 3, 1, 5, 3, 2]));
console.log(meanCalculator([9, 3, 6]));
console.log(meanCalculator([9.111, 3.786878, 6.799999, .0000000000000001]));
