function freeCoffeeCups(coffeeCups) {
  var free = Math.floor(coffeeCups / 6);
  return coffeeCups + free;
}

//test
console.log("freeCoffeeCups(13):", freeCoffeeCups(13))
console.log("freeCoffeeCups(6):", freeCoffeeCups(6))
console.log("freeCoffeeCups(5):", freeCoffeeCups(5))
