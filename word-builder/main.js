function wordBuilder(wordToSpell) {
  var array = [];
  var string = "";
  for (var i = 0; i < wordToSpell.length; i++) {
    string += wordToSpell[i];
    array.push(string);
  }
  return array;
}
//test
console.log("wordBuilder('JavaScript'):", wordBuilder("JavaScript"))
console.log("wordBuilder('Moon'):", wordBuilder("Moon"))
console.log("wordBuilder('Stars'):", wordBuilder("Stars"))
