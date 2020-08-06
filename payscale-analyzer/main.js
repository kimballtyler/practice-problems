function payscaleAnalyzer(payList) {
  var max = 0;
  var min = 100;
  for (var i = 0; i < payList.length; i++) {
    if (payList[i] > max) {
      max = payList[i];
    }
    if (payList[i] < min) {
      min = payList[i];
    }
  }
  return max - min;
}
//test
console.log("payscaleAnalyzer([28, 34, 21, 39]):", payscaleAnalyzer([28, 34, 21, 39]))
console.log("payscaleAnalyzer([18, 22, 19, 26]):", payscaleAnalyzer([18, 22, 19, 26]))
console.log("payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]):", payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]))
