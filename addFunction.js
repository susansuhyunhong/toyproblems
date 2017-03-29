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

//Study more about functional programming
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0#.u8awq68sg
