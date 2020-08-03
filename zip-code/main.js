function zipCodeValidator(zipToValidate) {
  if (zipToValidate.length !== 5) {
    return false;
  } else if (zipToValidate.indexOf(" ") !== -1) {
    return false;
  } else if (!zipToValidate > 0) {
    return false
  } else {
    return true;
  }

}

//test
console.log("zipCodeValidator('21594'):", zipCodeValidator("21594"));
console.log("zipCodeValidator('3Eds32'):", zipCodeValidator("3Eds32"));
console.log("zipCodeValidator('9123465'):", zipCodeValidator("9123465"));
