function rangeOfNumbers(startNum, endNum) {
  if(endNum <= startNum){
    return [endNum];
  } else {
    var arrOfNumbers = rangeOfNumbers(startNum + 1, endNum);
    arrOfNumbers.unshift(startNum);
    return arrOfNumbers;
  }
}
/* Approach no: 2 
function rangeOfNumbers(startNum, endNum) {
  if(endNum <= startNum){
    return [startNum];
  } else {
    var arrOfNumbers = rangeOfNumbers(startNum, endNum - 1);
    arrOfNumbers.push(endNum);
    return arrOfNumbers;
  }
}
*/
/* Approach no: 3 
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
*/
console.log(rangeOfNumbers(4,4));

