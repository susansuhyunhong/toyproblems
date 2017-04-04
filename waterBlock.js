//      @
//      @   @
//      @ @ @
//  @   @ @ @@
// @@@_@@@@@@@
// Input: Structure of water blocks - implement input value in whatever way you want
// Output: Number of blocks that could hold water

// Sol 1 - Input structure as 2D array (blocks with 1s, empty spaces with 0s)
// Time complexity: O(m x n) assuming input as m x n array
function numberOfBlocks(structureArr){
  let totalSum = 0;
  for(let i = 0; i < structureArr.length; i++){
    let currSum = 0;
    let hitBlock = false;
    for(let j = 0; j < structureArr[i].length; j++){
      if(structureArr[i][j] === 1 && hitBlock === false) hitBlock = true;
      else if(structureArr[i][j] === 0 && hitBlock === true) currSum++;
      else if(structureArr[i][j] === 1 && hitBlock === true) {
        totalSum += currSum;
        currSum = 0;
      }
    }
    console.log('end of each arrays', totalSum);
  }
  return totalSum;
}
const sampleStructure = [
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,1,0],
  [0,0,0,0,0,1,0,1,0,1,0],
  [0,1,0,0,0,1,0,1,0,1,1],
  [1,1,1,0,1,1,1,1,1,1,1]
]
console.log(numberOfBlocks(sampleStructure));


// Sol2 - Input structure as array of height of vertical blocks
// Input example: [1, 2, 1, 0, 1, 5, 1, 3, 1, 4, 2]
function numberOfBlocks_2(heightArr){
  // left to right iteration
  for(let i = 0; i < heightArr.length; i++){

  }
  // right to left iteration
}
// Given n non-negative integers in array representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
// For example:
// Input:
// 3
// 2 0 2
// Output:
// 2
// Structure is like below
// | |
// |_|
// We can trap 2 units of water in the middle gap.
