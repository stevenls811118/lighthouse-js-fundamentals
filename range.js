function range(start, end, step) {
  if((start === undefined || end === undefined || step === undefined) || start > end || step <= 0) {
    return [];
  } else {
    let array = [start];
    for(let i = 1; i < Math.floor((end - start)/step)+1; i++) {
      array.push(start + step * i);
    }
    return array;
  }
}	

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));  
console.log(range(-5, 30, 3));   