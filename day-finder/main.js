function dayFinder(stringDate) {
  const options = { weekday: 'long' };
  const date = new Date(stringDate);
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
// test
console.log("dayFinder('05/22/1946'):", dayFinder("05/22/1946"))
console.log("dayFinder('01/20/2001'):", dayFinder("01/20/2001"))
console.log("dayFinder('03/15/1988'):", dayFinder("03/15/1988"))
