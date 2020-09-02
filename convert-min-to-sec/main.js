function convertMinutesToSeconds(timeToConvert) {
  const minutes = parseInt(timeToConvert.substr(0,2), 10) * 60;
  const seconds = parseInt(timeToConvert.substr(3), 10);
  return minutes + seconds;
}

console.log(convertMinutesToSeconds("15:34"));
console.log(convertMinutesToSeconds("02:45"));
console.log(convertMinutesToSeconds("08:21"));
