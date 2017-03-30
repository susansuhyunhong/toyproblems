var List = function () {
  this.head = null;
  this.tail = null;
};

var ListNode = function (prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

// Insert at the head of the list.
List.prototype.unshift = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
  }

  return this.head;
};

// Delete at the head of the list.
List.prototype.shift = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.val;
  }
};

// Insert at the end of the list.
List.prototype.push = function (val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  // Not empty list.
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
  }

  return this.tail;
};

// Delete at the end of the list.
List.prototype.pop = function () {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  // Not empty list.
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    return tail.val;
  }
};

// Move a node to the front of the List
List.prototype.moveToFront = function (node) {
  if (node === this.tail) {
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    node.delete();
  }

  node.prev = node.next = null;

  // Don't delegate to shift, since we want to keep the same
  // object.

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

// Move a node to the end of the List
List.prototype.moveToEnd = function (node) {
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    node.delete();
  }

  // Don't delegate to push, since we want to keep the same
  // object.

  node.prev = node.next = null;

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  // At least one node.
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

ListNode.prototype.delete = function () {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};

module.exports.List = List;
module.exports.ListNode = ListNode;
