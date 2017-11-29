/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
*/

/*
Example:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

let selfDividingNumbers = function(left, right) {
  let resultArray = [];
  for(var num = left; num <= right; num++){
    if(selfDivingNumberChecker(num)){
      resultArray.push(num);
    }
  } 
  return resultArray;
}

 

let selfDivingNumberChecker = function(num){
  leet numArray = String(num).split('').map(function(el){return parseFloat(el)});
  if(numArray.indexOf(0) !== -1){
    return false;
  };
  for(var i = 0; i < numArray.length; i++){
    if(num % numArray[i] !== 0){
      return false;
    }
  }
  return true;
}
