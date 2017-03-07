// function braces(values){
//   var dic = { '[': 1, '{': 2, '(':3, ']': -1, '}': -2, ')':-3 };
//   var temp = [];
//   var result = [];
//   values.forEach((testString, index) => {
//     testString.split('').forEach((el, i) => {
//       if(dic[el]>0){
//         temp.push(el);
//         console.log(el,'pushed');
//       } else {
//         console.log('meets closing braces', el);
//         var popped = temp.pop();
//         console.log('pops', popped,'here');
//         if(dic[popped] === dic[el] * (-1)){
//           console.log('correct');
//         } else {
//           console.log(popped, el,'incorrect');
//           // return false;
//           result[index] = 'NO';
//         }
//       }
//     });
//     if(result.length === index){
//
//       result[index] = 'YES'
//     }
//   });
//   // console.log(temp);
//   // return true;
//   console.log(result);
//   return result;
// }
// var test1 = ['[]{}','{}(]'];
// var test2 = ['{','}','[','}'];
// braces(test1);
//
//
//
//

function braces(values){
  var dic = { '[': 1, '{': 2, '(':3, ']': -1, '}': -2, ')':-3 };
  var temp = [];
  var result = [];
  values.forEach((testString, index) => {
    testString.split('').forEach((el, i) => {
      if(dic[el]>0){
        temp.push(el);
      } else {
        var popped = temp.pop();
        if(dic[popped] !== dic[el] * (-1)){
          result[index] = 'NO';
        }
      }
    });
    if(result.length === index){
      result[index] = 'YES'
    }
  });
  return result;
}
var test1 = ['[]{}','{}(]','{[()]}','{}}[)]'];
// var test2 = ['{','}','[','}'];
console.log(braces(test1));
//
// function foo1()
// {
//  return {
// 	bar: "hello"
//  };
// }
// console.log(foo1());
// function foo2(){
//  return
//  {
// 	bar: "hello"
//  };
// }
// console.log(foo2());
