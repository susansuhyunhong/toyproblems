// Given a large array of integers and a window of size 'w',
// find the current maximum in the window as the window slides through the entire array.
// Time - O(n), Space - O(w)

let findMaxInSlidingWindow = (array, w) => {
  let maxes = [];
  let heap = []; // max heap to keep track of max values
  let invalid = undefined; // store left outer variable of current window

  array.forEach((num, i) => {
    if(i === 0) {
      heap.push(num);
    } else {
      // Maintain max heap
      while(heap[heap.length-1] <= num){ // pop until the heap's tail has no longer smaller than num
        heap.pop();
      }
      heap.push(num);

      // Slide window (pop off invalid vals, push currMax to maxes)
      if (i >= w - 1) {
        invalid = array[i-w]; // edge case: when i = w-1, invalid = undefined
        if(invalid === heap[0]){ // remove the remaining invalid
          heap.shift();
        }
        maxes.push(heap[0]);
      }
    }
  });
  return maxes;
};
console.log(findMaxInSlidingWindow([-4,2,-3,5,3,6], 3)); //[2,5,5,6]
console.log(findMaxInSlidingWindow([-4,2,-5,1,-1,6], 3)); //[2,2,1,6]
console.log(findMaxInSlidingWindow([-4,2,-5,1,-1,0, -5], 3)); //[2,2,1,1,0]


// ANSWER
// let find_max_sliding_window = function(arr, window_size) {
//   let result = [];
//   if (window_size > arr.length) {
//     return;
//   }
//
//   let window_ = []; // STORE THE INDICIES OF HEAP VALUES
//   //find out max for first window
//   for (let i = 0; i < window_size; i++) {
//     while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
//       window_.pop();
//     }
//     window_.push(i);
//   }
//   for (let i = window_size -1 ; i < arr.length; i++) {
//     // console.log('iteration ',i,'window_:',window_)
//     // remove all numbers that are smaller than current number
//     // from the tail of list
//     while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
//       window_.pop();
//     }
//
//     //remove first number if it doesn't fall in the window anymore
//     if (window_.length > 0 && (window_[0] <= i - window_size)) {
//       console.log('remove -- window_[0]:',window_[0],',i:',i,',window_size:',window_size, 'window:',window_);
//       window_.shift();
//     }
//     window_.push(i);
//     result.push(arr[window_[0]]);
//   }
//   return result;
// };
// console.log(find_max_sliding_window([-4,2,-3,5,3,6], 3));
// console.log(find_max_sliding_window([-4,2,-5,1,-1,6], 3));
