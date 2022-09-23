const reverse = function() {
  const args = process.argv.slice(2);
  let newArray = [];
  for (let i = 0; i < args.length; i++) {
    let newString = "";
    for (let j = args[i].length - 1; j >= 0; j--) {
      newString += args[i][j];
    }
    newArray.push(newString);
  }
  return newArray.toString().replace(/,/g, "\n");
};

console.log(reverse());