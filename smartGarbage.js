const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if(trash === "waste") {
    bins.waste++;
  } else if(trash === "recycling") {
    bins.recycling++;
  } else if(trash === "compost") {
    bins.compost++;
  }
  return bins;
};


const trash = "recycling";
const totalBin = { 
  waste: 4, 
  recycling: 2, 
  compost: 5 
};
console.log(smartGarbage(trash, totalBin));