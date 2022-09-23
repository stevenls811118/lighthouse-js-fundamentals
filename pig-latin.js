const pigLatin = function() {
  const array = process.argv.slice(2);
  for (let i = 0; i < array.length; i++) {
    let tempArray = array[i].split('');
    let firstChar = tempArray.shift();
    tempArray.push(firstChar);
    array[i] = tempArray.join('') + "ay";
  }

  return array.join(' ');
};
console.log(pigLatin());