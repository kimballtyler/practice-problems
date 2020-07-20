function isTheAverageWhole(numbersArray) {
  var sum = 0;
  var average = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  average = sum / numbersArray.length;
  return Number.isInteger(average);
  }
//test
console.log(isTheAverageWhole([1, 3, 4, 4]));
console.log(isTheAverageWhole([3, 4]));
console.log(isTheAverageWhole([5, 5, 5]));
