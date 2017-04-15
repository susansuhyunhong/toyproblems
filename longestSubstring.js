// Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3.
// -- Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

let longestSubstring = (str) => {
  let visited = {};
  let currSubstr = "";
  let longest = "";
  for(let i = 0; i < str.length; i++){
    if(visited[str[i]] === undefined){
      visited[str[i]] = i;
      currSubstr += str[i];
      console.log('new currSubstr', currSubstr)
    } else {
      currSubstr = currSubstr.slice(visited[str[i]]);
      console.log('sliced currSubstr', currSubstr)
      let currVal = str[i];
      visited = {}; // *** update visited also
      visited[str[i]] = i;
      console.log('new visited', visited)
    }
    if(currSubstr.length >= longest.length){
      longest = currSubstr;
    }
  }
  return longest;
}

console.log(longestSubstring("abcabcbb")); //abc
// console.log(longestSubstring("bbbb")); //b
// console.log(longestSubstring("pwwkew")); //wke
// console.log(longestSubstring("tmmzuxt")); //mzuxt
