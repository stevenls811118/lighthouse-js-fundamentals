const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = "";
    if (!(i % multiples[0])) output += words[0];
    if (!(i % multiples[1])) output += words[1];
    console.log(output ? output : i);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
