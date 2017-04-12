// Description
// Given coins denominations and total amount, find out the number of ways to make the change.
// For example, we have coin denominations 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways.

// coin change count without order
// let coinChange = function(denominations, amount) {
//   let solution = [];
//   for (let i = 0; i < amount + 1; i++) {
//     solution[i] = 0;
//   }
//   solution[0] = 1;
//   for (let j = 0; j < denominations.length; j++) {
//     for (let i = denominations[j]; i < amount + 1; i++) {
//       solution[i] += solution[i - denominations[j]];
//     }
//   }
//   return solution[solution.length - 1];
// };


// coin change count with order
let coinChange2 = (n) => {
  const scores = [1,2,5];
  let result = [null];

  for(let i = 1; i <= n; i++){
    if(scores.includes(i)){
      result.push(1);
    }
    if(i > 5){
      result.push(result[i-1] + result[i-2] + result[i-5]);
    } else if( i > 1 && i <= 2){
      result[i] ? result[i] += result[i-1] : result.push(result[i-1])
    } else if (i > 2 && i <= 5){
      result[i] ? result[i] += result[i-1] + result[i-2] : result.push(result[i-1] + result[i-2])
    }
  }
  // console.log(result)
  return result[n];
}

console.log(coinChange2(3)); //3
console.log(coinChange2(4)); //5
console.log(coinChange2(5)); //9
console.log(coinChange2(6)); //15
