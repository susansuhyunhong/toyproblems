// Imagine a game (like baseball) where a player can score 1,2 or 4 runs.
// Given a score "n", find the total number of ways score "n" can be reached.
// To score 3 runs a player can score the following 3 ways.
// n = 3
// 1, 1, 1
// 1, 2
// 2, 1

let gameScoringOptions = (n) => {
  const scores = [1,2,4];
  let result = [null];

  for(let i = 1; i <= n; i++){
    if(scores.includes(i)){
      result.push(1);
    }
    if(i > 4){
      result.push(result[i-1] + result[i-2] + result[i-4]);
    } else if( i > 1 && i <= 2){
      result[i] ? result[i] += result[i-1] : result.push(result[i-1])
    } else if (i > 2 && i <= 4){
      result[i] ? result[i] += result[i-1] + result[i-2] : result.push(result[i-1] + result[i-2])
    }
  }
  // console.log(result)
  return result[n];
}

console.log(gameScoringOptions(3)); //3
console.log(gameScoringOptions(4)); //6
console.log(gameScoringOptions(5)); //10
