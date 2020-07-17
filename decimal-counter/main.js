function decimalPlaceCounter(stringNumber) {
  var decimalCount = 0;
  var decimalIndex = stringNumber.indexOf(".");
  if (decimalIndex === -1) {
  } else {
    for (var i = decimalIndex + 1; i < stringNumber.length; i++) {
      decimalCount++;
    }
  }
  return decimalCount;
}
//test
console.log(decimalPlaceCounter("127.245"));
console.log(decimalPlaceCounter("145"));
console.log(decimalPlaceCounter("23.00"));
