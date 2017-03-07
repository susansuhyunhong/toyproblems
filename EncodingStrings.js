/* You are given a string, s, which is to be encoded into a cryptic format so that it can be transmitted securely.

The encoding process can be broken down into the following steps :
1. Remove all the vowels from the string.
2. Keep only the first occurrence of each character and remove all duplicates.
3. Encode each character using the encryption algorithm explained below.

  The encryption algorithm can be explained using an example as follows :
    1) Let bcd be the string to be encoded.
    2) First b is encoded. For this, we add the numerical values of b and its following character, c from the table below. This gives us 2 + 3 = 5.
    3) In the table below,  e has the numerical value of 5. So b is encoded as e.
    4) Incase, of encoding the last character of the string, we use the first character of the string as its following character.
    5) When sum is greater than 26, the below table repeats itself.  For example, a becomes 27, b becomes 28 .  .  .  z becomes 52.
    6) Similarly,  c is encoded as g and d is encoded as f.
    7) We get egf as our final encoded string.
*/

function alphabetToVal(al) {
  return ( al.charCodeAt() - 'a'.charCodeAt() ) + 1
}

function valToAlphabet(val) {
  val > 26 ? val -= 26 : null;
  return String.fromCharCode('a'.charCodeAt() + ( val - 1 ));
}

function encode_string(s) {
  var shortened = [];
  var encrypted = [];

  // Step 1 & 2 - Remove vowels & duplicates
  s.split('').forEach((el,i)=> {
    if(el !== 'a' && el !== 'e' && el !== 'i' && el !== 'o' && el !== 'u' ){ // remove vowels
      if(shortened.indexOf(el) === -1){ // remove duplicates
        shortened.push(el);
      }
    }
  });
  console.log('vowels, duplicates removed: ', shortened);

  // Step 3 - Encryption
  shortened.forEach((el, i) => {
    var followingCharVal = 0;
    var sumVal = 0;
    i === shortened.length -1 ? followingCharVal = alphabetToVal(shortened[0]) : followingCharVal = alphabetToVal(el) + 1;
    sumVal = followingCharVal + alphabetToVal(el);
    encrypted.push(valToAlphabet(sumVal));
  });
  return encrypted;
}

console.log('result:',encode_string('bcd')); //egf
console.log('result:',encode_string('yxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxioioioioio')); //ww
console.log('result:',encode_string('xyxyxyxyxyxyxyxyxyioioioioio')); //ww
