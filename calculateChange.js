const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;

  let bills = {};

  const coinTypes = ["twentyDollar", "tenDollar", "fiveDollar", "twoDollar", "oneDollar", "quarter", "dime", "nickel", "penny"];

  const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  /* first thought
  let amount = [];

  for(let i = 0; i < coinValues.length; i++) {
    amount.push(Math.floor(change/coinValues[i]));
    change = change % coinValues[i];
  }

  for(let j = 0; j < amount.length; j++) {
    if(amount[j] !== 0) {
      bills[coinTypes[j]] = amount[j];
    }
  }

  return bills;
  */
  let amount; // second thought, simplify

  for(let i = 0; i < coinValues.length; i++) {
    amount = Math.floor(change/coinValues[i]);
    if (amount > 0) {
      bills[coinTypes[i]] = amount;
      change = change % coinValues[i];
    }
  }

  return bills;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(2699, 10000));