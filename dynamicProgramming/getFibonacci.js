// Find the nth fibonacci number.
// Fibonacci numbers are defined as:
// Fib(0): 0
// Fib(1): 1
// Fib(N): Fib(N-1) + Fib(N-2), for N >= 2
// First 10 fibonacci numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// // Sol1 - recursion
// function getFibonacci(n){
//   if(n === 0) return 0;
//   else if(n === 1) return 1;
//   else {
//     return getFibonacci(n-1) + getFibonacci(n-2);
//   }
// }

// Sol2 - dynamic programming
function getFibonacci(n){
  if( n === 0 || n === 1 ){
    return n;
  }
  let n_2 = 0;
  let n_1 = 1;
  let sum = 0;
  let i = 2;
  
  while(i <= n){
    sum = n_2 + n_1;
    n_2 = n_1;
    n_1 = sum;
    i++;
  }
  return sum;
}

console.log(getFibonacci(0)) //0
console.log(getFibonacci(1)) //1
console.log(getFibonacci(2)) //1
console.log(getFibonacci(3)) //2
console.log(getFibonacci(4)) //3
console.log(getFibonacci(5)) //5
console.log(getFibonacci(6)) //8
