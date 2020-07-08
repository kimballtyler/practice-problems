function phAnalyzer(pH) {
  if (pH === 7) {
    return "neutral";
  } else if (pH < 7 && pH > 0) {
    return "acidic";
  } else if (pH > 7 && pH < 15) {
    return "alkaline"
  } else {
    return "invalid pH value"
  }
}
// test
var acidInput = phAnalyzer(1);
console.log(acidInput);

var alkalineInput = phAnalyzer(14);
console.log(alkalineInput);

var neutralInput = phAnalyzer(7);
console.log(neutralInput);

var invalidInput = phAnalyzer(0);
console.log(invalidInput);
