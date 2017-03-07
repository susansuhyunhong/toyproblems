function mergeStrings(a, b) {
  var arrA = a.split('');
  var arrB = b.split('');
  if(arrA.length >25000 || arrB.length>25000){
    console.log('edge case');
    return false;
  }
  var result = '';
  var continueFlag = true;
  while(continueFlag){
    if(arrA.length === 0 || arrB.length === 0){
      continueFlag = false;
    } else {
      result += arrA.shift() + arrB.shift();
      console.log(result);
    }
  }
  // console.log(arrA.toString());
  // , arrB.toString());
  result += arrA.join('') + arrB.join('');
  console.log(result);
  return result;
}

mergeStrings('ae222','lxy');


----------
function mergeStrings(a, b) {
  if(a.length >25000 || b.length>25000){
      return '';
  }
  var arrA = a.split('');
  var arrB = b.split('');
  var result = '';
  var continueFlag = true;

  while(continueFlag){
    if(arrA.length === 0 || arrB.length === 0){
      continueFlag = false;
    } else {
      result += arrA.shift() + arrB.shift();
    }
  }

  result += arrA.join('') + arrB.join('');
  return result;
}
