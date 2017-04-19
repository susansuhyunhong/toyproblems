// Given a sorted array of integers, return the index of the given key. Return -1 if not found.
// Given the following array, if search key(item in array) is 20, binary search will return 2(index of the item).
// [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]

// Solution 1 - Time O(log n), Space O(log n)
let binarySearch = (arr, key) => {
  let medIdx = arr.length/2;
  let helper = (medIdx) => {
    if(arr[medIdx] > key){
      medIdx += (arr.length - medIdx)/2;
    }
  }
}
