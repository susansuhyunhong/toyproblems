// Problem Statement
// A sequence of numbers is called a zig-zag sequence
// if the differences between successive numbers strictly alternate between positive and negative.
// The first difference (if one exists) may be either positive or negative.
// A sequence with fewer than two elements is trivially a zig-zag sequence.

// For example, 1,7,4,9,2,5 is a zig-zag sequence
// because the differences (6,-3,5,-7,3) are alternately positive and negative.
// In contrast, 1,4,7,2,5 and 1,7,4,5,5 are not zig-zag sequences,
// the first because its first two differences are positive and the second because its last difference is zero.

// Given a sequence of integers, sequence,
// return the length of the longest subsequence of sequence that is a zig-zag sequence.
// A subsequence is obtained by deleting some number of elements (possibly zero) from the original sequence,
// leaving the remaining elements in their original order.

// Constraints
// -	sequence contains between 1 and 50 elements, inclusive.
// -	Each element of sequence is between 1 and 1000, inclusive.
function longestZigZag(seq){
  var longestUntil = [1];
  var increase = undefined;
  for(let i = 1; i < seq.length; i++){ // current index to find max length
    var final = [seq[0]];
    // Set initial flag
    if(increase === undefined){
      longestUntil[0] < seq[i] ? increase = true : increase = false; // if same, still undefined
    }
    for(let j = 0; j < i; j++){ // prev values in sequence
      // console.log('set flag:', increase)
      // console.log('increase flag:',increase,longestUntil);
      console.log('curr:',i,'prev:',j,'increase:',increase,'prev:',seq[j],'curr:',seq[i],'longestUntil:',longestUntil)
      // if(i===1) longestUntil[i] = 1; //do i need this?
      if(!longestUntil[i]) longestUntil[i] = longestUntil[i-1]
      if(increase && seq[j] < seq[i]){ // prev < curr
        console.log('increase',longestUntil, longestUntil[i], '<=',longestUntil[j]+1);
        if(longestUntil[i] <= longestUntil[j] + 1){
          longestUntil[i] = longestUntil[j] + 1;
          console.log('increased:', longestUntil)
          final.push(seq[j]);
          increase = !increase;
        }
        console.log('set flag:', increase)
        // break;
      }else if(!increase && seq[j] > seq[i]){
        console.log('decrease', longestUntil);
        if(longestUntil[i] <= longestUntil[j] + 1){
          longestUntil[i] = longestUntil[j] + 1;
          console.log('decreased:', longestUntil);
          final.push(seq[j]);
          increase = !increase;
        }
        console.log('set flag:', increase);
        // break;
      }else{
        // console.log('before why', longestUntil,longestUntil[i],longestUntil[i-1],i,i-1, increase,seq[j], seq[i])
        longestUntil[i] = longestUntil[i-1];
        // console.log('why',longestUntil)
      }
      // console.log('=====curr:',i,'prev:',j,'prev:',seq[j],'curr:',seq[i],'longestUntil:',longestUntil);
    }
    console.log('********final:', final);
  }
  console.log(longestUntil)
  return longestUntil[seq.length-1];
}

console.log(longestZigZag([1, 7, 4, 9, 2, 5])); //Returns: 6
// console.log(longestZigZag([4, 9, 2]));
// The entire sequence is a zig-zag sequence.
// console.log(longestZigZag([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])); // Returns: 7
// // There are several subsequences that achieve this length. One is 1,17,10,13,10,16,8.
// console.log(longestZigZag([44])); // Returns: 1
// console.log(longestZigZag([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Returns: 2
// console.log(longestZigZag([70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32])); // Returns: 8
// console.log(longestZigZag([374, 40, 854, 203, 203, 156, 362, 279, 812, 955,
// 600, 947, 978, 46, 100, 953, 670, 862, 568, 188,
// 67, 669, 810, 704, 52, 861, 49, 640, 370, 908,
// 477, 245, 413, 109, 659, 401, 483, 308, 609, 120,
// 249, 22, 176, 279, 23, 22, 617, 462, 459, 244])); // Returns: 36

// // Solution without DP
// function longestZigZag(seq) {
//   var longest = [seq[0]];
//   var flag = undefined;
//   var prev = longest[0];
//
//   for(let i=1; i<seq.length; i++){
//     if(i===1){
//       if(prev < seq[1]){
//         flag = true;
//       } else {
//         flag = false;
//       }
//     }
//     if(seq[i] > prev && flag === true){
//       longest.push(seq[i]);
//       flag = false;
//     } else if(seq[i] < prev && flag === false) {
//       longest.push(seq[i]);
//       flag = true;
//     }
//     prev = seq[i];
//   }
//   // console.log(longest)
//   return longest.length;
// }
