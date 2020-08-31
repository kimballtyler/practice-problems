function accountNumberProtector(cardNumberString) {
return "**" + cardNumberString.slice(12);
}

console.log(accountNumberProtector("5543223485638832"));
console.log(accountNumberProtector("8934235477210943"));
console.log(accountNumberProtector("7513635499320192"));
