// Figure out whether the given words can form a circular chain.
// Assume that single word can never form a chain.
// Two words can be chained together if the first word's last letter is equal to the second word's first letter.
// We are given a list of words and we need to figure out if all these words can be chained together or not.
// Let's assume that all words are lower case.

// Consider the following words: eve, eat, ripe, tear
// Chain: eve -> eat -> tear -> ripe -> eve(back to starting word)

function Graph(){
  this.list = {};
}
Graph.prototype.add = (node) => {
  this.list
}
// let node = (word) => {
function Node(word){
  this.val = word;
  this.first = word[0];
  this.last = word[word.length-1];
  this.next = null;
}

let wordChaining = (arr) => {
  // edge case: when input arr.length === 0
  if(arr.length === 0) return false;

  // make Nodes
  arr.forEach((word)=> {
    let res = new Node(word)
    console.log(res)
    }
  )

  // let curr = arr[0];
  // let words = arr.slice(1); // make a copy
  // console.log(words)
  // let chain = [];
  //
  // while(words.length){
  //   for(let i = 0; i < words.length; i++){
  //     if(words[i] === curr){
  //       delete words[i];
  //     }
  //   }
  //   console.log(words,'changed')
  //   break;
  // }

}

console.log(wordChaining(['eve', 'eat', 'ripe', 'tear']));
