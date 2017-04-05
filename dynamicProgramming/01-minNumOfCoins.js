// Given a list of N coins, their values (V1, V2, … , VN), and the total sum S.
// Find the minimum number of coins the sum of which is S (we can use as many coins of one type as we want),
// or report that it’s not possible to select coins in such a way that they sum up to S.

// Given coins with values 1, 3, and 5.
// And the sum S is set to be 11.

function minNumofCoins (valuesArr, sum){
  // Set Min[i] equal to Infinity for all of i
  var min = [];
  for(let i = 0; i <= sum; i++){
    min[i] = 999999;
  }
  // Set Min[0]=0
  min[0] = 0;

  // For i = 1 to S
  for( let i = 1; i <= sum; i++ ){
    // For j = 0 to N - 1
    for( let j = 0; j < valuesArr.length; j++ ){
      let coinVal = valuesArr[j];
      console.log('inbetween:', coinVal, min);
      // If (Vj<=i AND Min[i-Vj]+1<Min[i])
      if( coinVal <= i && min[i - coinVal] + 1 < min[i] ){
        // Then Min[i]=Min[i-Vj]+1
        min[i] = min[i - coinVal] + 1;
      }
    }
  }
  console.log(min);
  // Output Min[S]
  return min[sum];
}

// edge case when coin is bigger than sum
var res = minNumofCoins([2,3,5], 11);
console.log(res);
