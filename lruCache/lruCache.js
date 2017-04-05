var List = require('./doublyLinkedList').List;
var ListNode = require('./doublyLinkedList').ListNode;

var LRUCache = function (limit) {
  this.limit = limit;
  this.size = 0;
  this.items = new List();
  this.resize = function(itemKey){
    // let curr3 = this.items.head;
    // while(curr3){
    //   console.log("***",curr3.val.item )
    //   curr3 = curr3.next;
    // }
    let popFlag = true;
    let curr = this.items.head;
    while(curr){
      if(curr.val.item.val.key === itemKey){
        const foundNode = curr.val.item;
        this.items.moveToFront(foundNode);
        popFlag = false;
        break; // needed?
      }
      curr = curr.next;
    }
    // if(popFlag){
      // if not found, pop the least used, add the new
      // console.log(this.items,"this.items==")
      this.items.pop();
      var itemVal = arguments[1];
      var newItem = new LRUCacheItem(itemVal, itemKey);
      this.items.unshift(newItem);
    // }
    // let curr2 = this.items.head;
    // while(curr2){
    //   console.log("====",curr2.val.item )
    //   curr2 = curr2.next;
    // }
  }
};

var LRUCacheItem = function (val, key) {
  var obj = {};
  obj[key] = val;
  this.item = new ListNode(null, {key: key, val: val}, null);
};

LRUCache.prototype.size = function () {
  return this.size;
};

LRUCache.prototype.get = function (key) {
  // return this.items.key;
  var count = 1;
  var curr0 = this.items.head;
  // console.log('curr0', curr0.val.item.val)
  while(curr0!==null){ // until it meets null
    // console.log("found:",curr0.val.item)
    if(curr0.val.item.val.key === key){
      this.resize(key);
      return curr0.val.item.val.val;
    }
    curr0 = curr0.next;
    console.log('this??', curr0,'/count?:',count);
    count++;
  }
  return null;
};

LRUCache.prototype.set = function (key, val) {
  var newItem = new LRUCacheItem(val, key);
  if(this.size < this.limit){
    this.items.unshift(newItem);
    this.size ++;
  } else {
    console.log("We have to resize");
    this.resize(key);
  }
};





var cache = new LRUCache(3); // limit of 3 items
cache.set("item1", 1);
cache.set("item2", 2);
cache.set("item3", 3);
cache.set("item4", 4);

console.log(cache.get("item3")); //=> 3

console.log(cache.get("item2")); //=> 2
// // check how cache looks like
// let curr4 = cache.items.head;
// while(curr4){
//   console.log("^^^",curr4.val.item )
//   curr4 = curr4.next;
// }
// item1 was removed because it was the oldest item by insertion/usage
// console.log(cache.get("item1")); //=> null
// item4 is removed to make room, because it is the oldest by usage,
// which takes priority.
// cache.set("item5", 5);

// item3 is also removed, because it was retrieved before item2 was
// last retrieved.
// cache.set("item6", 6);
