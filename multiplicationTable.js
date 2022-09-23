const multiplicationTable = function(maxValue) {
  // Your code here
  let str = "";
  for(let i = 1; i <= maxValue; i++) {
    for(let j = 1; j <= maxValue; j++) {
      str += i * j + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
console.log(multiplicationTable(30));