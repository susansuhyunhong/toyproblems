var List = require('./doublyLinkedList').List;
var ListNode = require('./doublyLinkedList').ListNode;

var LRUCache = function (limit) {
  this.limit = limit;
  this.size = 0;
  this.items = new List();
  this.resize = function(itemKey){
    console.log("resizing");
    // iterate to find item
    let foundNode = undefined;
    let curr = this.items.head;
    while(curr){
      if(curr.val.item.val.key === itemKey){
        foundNode = curr.val.item;
        break;
      }
      curr = curr.next;
    }
    // if item already exists, move to front
    if(foundNode) {
      console.log("moveToFront");
      this.items.moveToFront(foundNode);
      // check how cache looks like
      let curr4 = cache.items.head;
      // console.log(cache.items.head.val,"head");//3
      // console.log(cache.items.head.next.val.item.val,"head.next");//4
      // console.log(cache.items.head.next.val.item,"head.next.next");//4
      while(curr4!== null){
        // console.log("^^^",curr4.val.item )
        curr4 = curr4.next;
      }

    } else { // if new item, pop the last item & unshift new item
      console.log("pop");
      this.items.pop();
      const newItem = new LRUCacheItem(arguments[1], itemKey);
      this.items.unshift(newItem);
    }

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

LRUCache.prototype.set = function (key, val) {
  var newItem = new LRUCacheItem(val, key);
  if(this.size < this.limit){
    console.log('no resize')
    this.items.unshift(newItem);
    this.size ++;
  } else {
    this.resize(key, val);
  }
};
//
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
    // console.log('this??', curr0,'/count?:',count);
    count++;
  }
  return null;
};


var cache = new LRUCache(3); // limit of 3 items
cache.set("item1", 1);
cache.set("item2", 2);
cache.set("item3", 3);
cache.set("item4", 4);
console.log(cache.get("item3")); //=> 3
let curr4 = cache.items.head;
while(curr4){
  console.log("^^^",curr4.val.item )
  curr4 = curr4.next;
}

// console.log(cache.get("item2")); //=> 2
