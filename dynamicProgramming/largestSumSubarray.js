// Given an array, find the contiguous subarray with the largest sum.
// In the array below, the largest sum subarray starts at index 3 and ends at 6 and the largest sum is 12.
// [-4, 2, -5, 1, 2, 3, 6, -5, 1] => [1, 2, 3, 6]
// Runtime Complexity: Linear, O(n)
// Memory Complexity: Constant, O(1)

function largestSumSubarray(arr){
  let maxSum = 0;
  let maxStartIndex = 0;
  let maxEndIndex = 0;

  let currSum = 0;
  let currStartIndex = 0;
  let currEndIndex = 0;

  for( let i = 0 ; i < arr.length ; i++ ){

    if(currSum + arr[i] > arr[i]) {
      currSum += arr[i];
      currEndIndex = i;
    } else {
      currSum = arr[i];
      currStartIndex = i;
      currEndIndex = i; // ** Update end index also
    }

    if(currSum > maxSum){
      maxSum = currSum;
      maxEndIndex = currEndIndex;
      maxStartIndex = currStartIndex;
      // console.log(maxStartIndex, maxEndIndex)
    }
    console.log('maxSum:',maxSum,'currSum:',currSum, 'maxStartIndex:',maxStartIndex, 'maxEndIndex:', maxEndIndex)
  }
  return arr.slice(maxStartIndex, maxEndIndex+1);
}

console.log(largestSumSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1])); //[1, 2, 3, 6]
console.log(largestSumSubarray([-1, 2, 4, 9, 10, -99, 2, -2, 100])); //[100]
console.log(largestSumSubarray([]));
