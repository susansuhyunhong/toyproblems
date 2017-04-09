// Description
// Given coins denominations and total amount, find out the number of ways to make the change.
// For example, we have coin denominations 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways.

let coinChange = function(denominations, amount) {
  let solution = [];
  for (let i = 0; i < amount + 1; i++) {
    solution[i] = 0;
  }
  solution[0] = 1;
  for (let j = 0; j < denominations.length; j++) {
    for (let i = denominations[j]; i < amount + 1; i++) {
      solution[i] += solution[i - denominations[j]];
    }
  }
  return solution[solution.length - 1];
};
