var myNumber = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
console.log("Sebelumnya : " + myNumber);

var mySort = myNumber.sort()
console.log("Ascending : " + mySort);

var myReverse = mySort.reverse()
console.log("Descending : " + myReverse);

var myFilter = myNumber.filter(item => {
  return item > 10;
});

console.log("Filter > 10 : " + myFilter);
