// We have our lists of orders sorted numerically already, in arrays.
// Write a function to merge our arrays of orders into one sorted array.

// const mergeSortedArray = (arr1, arr2) => {
//   let result = [];
//   let currMin = -99;
//   let idx2 = 0;
//
//   for( let i = 0; i <= arr1.length-1; i++ ){
//     if( arr1[i] > arr2[idx2] ){
//       currMin = arr2[idx2];
//       console.log(currMin);
//       idx2 ++;
//     } else {
//       currMin = arr1[i];
//       console.log(currMin);
//     }
//     result.push(currMin);
//     if(idx2 === arr2.length-1){
//       console.log('this case?')
//       for( let j = i+1; j <= arr1.length-1; j++ ){
//         result.push(arr1[j]);
//       }
//       return result;
//
//     }
//     console.log('iteration ',i, ':',result)
//   }
//   if(idx2 !== arr2.length-1 ){
//     for( let k = idx2; k <= arr2.length-1; k++ ){
//       result.push(arr2[k]);
//       console.log('push all here', arr2[k])
//     }
//   }
//   return result;
// }
const pushRestOfArr = (idx, arr) => {
  let subResult = [];
  for(let i = idx; i < arr.length; i++){
    subResult.push(arr[i]);
  }
  return subResult;
}

const mergeSortedArray = (arr1, arr2) => {
  let result = [];
  let currMin = -99;
  let idx1 = 0;
  let idx2 = 0;

  for( let idxMerge = 0; idxMerge <= arr1.length + arr2.length - 2; idxMerge++ ){
    if( arr1[idx1] > arr2[idx2] ){
      currMin = arr2[idx2];
      console.log(currMin);
      idx2 ++;
    } else {
      currMin = arr1[idx1];
      console.log(currMin);
      idx1++;
    }
    result.push(currMin);
    if( idx1 >= arr1.length && idx2 !== arr2.length-1 ){
      console.log('idx1 is ', idx1);
      // result.push('restOfArr2');
      result.push(pushRestOfArr(idx2, arr2));
      idx2 = arr2.length-1;
      return result;
    }
    if( idx2 >= arr2.length && idx1 !== arr1.length-1 ){
      // console.log('push rest of arr1');
      // result.push('restOfArr1');
      console.log('idx2 is ', idx2);
      result.push(pushRestOfArr(idx1, arr1));
      idx1 = arr1.length-1;
      return result;
    }

  }
  return result;
}


// console.log(mergeSortedArray([0,1,2,3,4],[4,4,5,8]));
console.log(mergeSortedArray([0,5,7],[1,3,9]));
