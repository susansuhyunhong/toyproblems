// Given a sequence of N numbers – A[1] , A[2] , …, A[N] .
// Find the length of the longest non-decreasing sequence.
// Let’s see what happens for a randomly generated sequence: 5, 3, 4, 8, 6, 7:

function longestNonDesc(seq){
  var lengthUntil = [1]; // initialize first value's lengthUntil of sequence
  for(let i = 1; i < seq.length; i++){ // curr val
    for(let j = 0; j < i; j++){ // prev vals
        if(!lengthUntil[i]) lengthUntil[i] = 1;
        if(seq[j] <= seq[i]){ // non-decreasing (prev <= curr)
          // console.log( 'prev:', j, 'curr:', i, lengthUntil )
          if(lengthUntil[i] < lengthUntil[j]+1 ){ // only when replacing lengthUntil is larger than before
            lengthUntil[i] = lengthUntil[j]+1; // increase length
          }
        }
    }
  }
  return Math.max(...lengthUntil);
}
console.log(longestNonDesc([5, 3, 4, 8, 6, 7])); //4
console.log(longestNonDesc([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])); //6
console.log(longestNonDesc([44])); //1
console.log(longestNonDesc([1, 2, 3, 4, 5, 6, 6, 7, 8, 9])); //10
