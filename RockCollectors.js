
function get_rock_index(quantity) {

  var jamie = quantity;
  var ned = jamie.sort((a,b) => (a - b));
  var geoffrey = [];
  var myMap = new Map();
  var yourMap = new Map();

  jamie.forEach((jamEl, idx) => {
    var nedEl = ned[idx];
    var geoEl = jamEl + nedEl;
    geoffrey.push(geoEl);
    myMap.get(geoEl) ? (myMap.get(geoEl).count++ , myMap.get(geoEl).index = idx ) : myMap.set(geoEl, { count: 1, index: idx });
  });
  console.log(geoffrey);

  var tmpMaxVal = 0;
  var tmpMaxIdx = -1;
  for(var v of myMap){
    if(v[1].count > tmpMaxVal){
      tmpMaxVal = v[1].count;
      tmpMaxIdx = v[1].index;
    }
  }
  return tmpMaxIdx;
}

console.log(get_rock_index([5, 5, 9, 19, 2, 2])); //1



// var tempObj = [];
// var tempEl = 0;
// var tempCnt = 0;
// var tempIdx = -1;
// var tempArray = [];
// geoffrey.forEach((el,i)=> {
//   if(el > tempEl || i === geoffrey.length-1 ){
//     tempArray.push([tempEl, tempCnt, tempIdx]);
//     // reset
//     tempEl = el;
//     tempCnt = 1;
//     tempIdx = i;
//   } else if(el === tempEl){
//     tempCnt ++;
//     tempIdx ++;
//   }
// });
// console.log(tempArray);
