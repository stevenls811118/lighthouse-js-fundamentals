// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...

iceCreamFlavours.push("root beer");

console.log(iceCreamFlavours);
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[iceCreamFlavours.length-1]);
console.log(iceCreamFlavours.length);
console.log(typeof(5 % "3"));
console.log("abc" || " Marley")
console.log("Jeremy" > "Khurram")
console.log("Don\nBurks")

let sum = 3 + 2;

const doubleSum = function(a, b) {
  let sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(doubleSum(5, 4));

const areMultiples  = function (bigNumber, smallNumber) {
  return bigNumber % smallNumber === 0;
}

console.log(areMultiples(15, 4));