// i: coin denominations, amount
// o: # of possible combos
// e: amount is zero or negative or non integer

// sort denoms desc
const countCombos = (coinValues, targetSum) => {
  coinValues.sort((a, b) => b - a);

  const lastInd = coinValues.length - 1;

  // coinValues = [25,10,5,1]; targetSum = 14
  const combine_r = (amt, valInd) => {
    console.log(amt, valInd)
    if (valInd >= lastInd) {
      // return 1;
      // BASE CASE
      const tmp = amt % coinValues[valInd];
      console.log(tmp);
      if (tmp === 0) {
        return 1;
      } else {
        return 0;
      }
    } else {
      // take each value in coins
      const val = coinValues[valInd];
      let count = 0;

      // increment its qty until the sum is > amount.
      for (let qty = 1; val * qty <= amt; qty++) {
        const nextAmt = amt - (qty * val); //
        const result = combine_r(nextAmt, valInd + 1);
        count += result;
      }

      return count;
      //;
      // then qty++
      // let diff be amount passed MINUS coinVal * qty
      // let res be recurse with (diff, next coin value)
      // add res to count
    }
  }

  return combine_r(targetSum, 0);
  // return total;
}

function assertEq(act, exp) {
  const result = act === exp
  console.log(`${act} === ${exp} ? ${result}`);
  return result;
}
const act = countCombos([25,10,5, 1], 14);
assertEq(act, 4);
// [num25s, num10s, ....]
// [0, 1, 0, 4];
// [0, 0, 2, 4];
// [0, 0, 1, 9];
// [0, 0, 0, 14];
// console.log(7 % 10);
// console.log(10 % 7);
//
// return count

/**
 * sort coins desc
 * BASE CASE (`valInd === coinValues.length - 1`)
 *   check if (last coin <= diff && diff % value at `valInd` === 0)
 *     yes: return 1;
 *     no: return 0;
 * // not base case:
 * consider a coin value
 * is it higher than amt?
 *   yes: continue with next coin value (smaller coin)
 *   no: how many (qty) will fit such that qty * coinVal <= amt?
 *
 * starting at qty = 1
 * let prod be qty * coinVal
 * as long as prod <= `amt`
 *   take difference of `amt - (qty * coinVal)`, let it be the `nextAmt`
 *   pass `nextAmt` and `valInd + 1` (ref next coin value) to fn
 */
