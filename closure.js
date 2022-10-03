function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let i = -1;
  return function() {
    /* your code here */
    i += 1
    return list[i];
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


const countdownGenerator = function (x) {
  /* your code here */
  x = x + 1;
  
  return function() {
    x--;
    if (x > 0) {
      console.log(`T-minus: ${x}...`)
    } else if (x === 0) {
      console.log(`Blast Off!`);
    } else {
      console.log(`Rockets already gone, bub!`);
    }
  }
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
