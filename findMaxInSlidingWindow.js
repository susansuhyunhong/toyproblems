let findMaxInSlidingWindow = (array, w) => {
  let maxes = [];
  let heap = [];
  array.forEach((num, i) => {
    if(i === 0) {
      heap.push(num);
    } else {
      if (heap[0] < num) {
        heap = [num];
      } else {
        heap.push(num);
      }
    }
    if (i >= w - 1) {
      maxes.push(heap[0]);
    }

  });
  return maxes;
};

console.log(findMaxInSlidingWindow([-4,2,-3,5,3,6], 3));
