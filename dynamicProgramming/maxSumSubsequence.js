// MaxSum Subsequence - Nonadjacent Elements
// Find an efficient algorithm to find maximum sum of a subsequence in an array such that no consecutive elements are part of this subsequence.
// Constraints
// Time: O(n). space: O(n)

// Ref sol - time O(n)
const maxSumSubsequence = (arr) => {
  let sumArr = [];
  let tempSum = 0;
  let maxSum = 0;
  arr.forEach((val, idx) => {
    if(idx === 0) sumArr.push(val);
    else if(idx === 1) sumArr.push( Math.max(val, sumArr[0]) );
    else {
      sumArr.push( Math.max(val, sumArr[idx-1], val+ sumArr[idx-2]) );
    }
  });
  return sumArr[sumArr.length-1];
}

console.log(maxSumSubsequence([1, 6, 10, 14, -5, -1 , 2 , -1, 3])); // max sum = 25
console.log(maxSumSubsequence([1, -1, 6, -4, 2])); // max sum = 9
console.log(maxSumSubsequence([-2, -3, -4, 1, 2, 5])); // max sum = 6
