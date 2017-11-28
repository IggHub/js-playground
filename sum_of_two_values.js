/Given an array of integers and a value, determine if there are any two integers in the array which sum equal to the given value./

//solution 1 (O(n) runtime, O(n) memory complexity)

let sum_of_two = function(arr, tar){
  let set = new Set();

  for (let i in arr){
    if(set.has(tar - arr[i])){
      return true;
    }
    set.add(arr[i])
  }
  return false;
}

//solution 2 (O(n logn) runtime, O(1) memory complexity)

let sum_of_two = function(arr, tar){
  let l = 0;
  let r = arr.length - 1;

  while(l < r){
    var sum = arr[l] + arr[r];

    if(tar === sum) { return true };

    if(sum > tar){
      r--;
    } else {
      l++;
    }
  }
  return false;
}
