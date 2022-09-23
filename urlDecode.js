const urlDecode = function(text) {
  // Put your solution here
  let spaceText = text.replace(/%20/g, " ");
  let array = spaceText.split("&");
  let obj = {}

  for(let i = 0; i < array.length; i++) {
    let splitByEqual = array[i].split("=");
    obj[splitByEqual[0]] = splitByEqual[1];
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain&temperature=20%20degree%20celsius"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain&temperature=20%20degree%20celsius").temperature);