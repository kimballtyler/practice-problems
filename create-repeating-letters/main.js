function createRepeatingLetters(word, numOfRepeats) {
  var c = 0;
  var string = "";
  for (var i = 0; i < word.length; i++) {
    while (c < numOfRepeats) {
      string += word[i];
      c++;
    }
    c = 0;
  }
  return string;
}
//test
console.log(createRepeatingLetters("John", 3));
console.log(createRepeatingLetters("car", 4));
console.log(createRepeatingLetters("howdy", 1));
