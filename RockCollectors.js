/*
 * Complete the function below.
 */
function get_rock_index(quantity) {

  var jamie = quantity;
  var ned = jamie.sort((a,b) => (a-b));
  console.log(ned);
  var geoffrey = [];

  var tempObj = [];

  jamie.forEach((jamEl, idx) => {
    var nedEl = ned[idx];
    var geoEl = jamEl + nedEl;
    geoffrey.push(geoEl);
  });
  console.log(geoffrey);

  var tempEl = 0;
  var tempCnt = 0;
  var tempIdx = -1;
  var tempArray = [];
  geoffrey.forEach((el,i)=> {
    if(el > tempEl || i === geoffrey.length-1 ){
      tempArray.push([tempEl, tempCnt, tempIdx]);
      // reset
      tempEl = el;
      tempCnt = 1;
      tempIdx = i;
    } else if(el === tempEl){
      tempCnt ++;
      tempIdx ++;
    }
  });
  console.log(tempArray);
}
