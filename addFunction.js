// Write an add function that satifies below.
// add(2,5) = 7
// add(2)(5) = 7

function add(a,b){
  if(b === undefined){
    return function(c){
      return a+c;
    }
  }
  return a+b;
}

console.log(add(2,5));
console.log(add(2)(5));
