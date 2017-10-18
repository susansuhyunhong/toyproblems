// Flatten a multilevel linked list
// http://www.geeksforgeeks.org/flatten-a-linked-list-with-next-and-child-pointers/
// Given a linked list where in addition to the next pointer, each node has a child pointer, which may or may not point to a separate list.
// These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in below figure.
// You are given the head of the first level of the list.
// Flatten the list so that all the nodes appear in a single-level linked list.
// You need to flatten the list in way that all nodes at first level should come first, then nodes of second level, and so on.

// ES6?
// class Node {
//   constructor() {
//     this.val = val;
//     this.next = next;
//     this.child = child;
//   }
// }

function Node(val){
  this.val = val;
  this.next = null;
  this.child = null;
}

function SinglyLinkedList() {
  this._length = 0;
  this.head = null;
}

//v1 - flatten to a separate list
function flattenToSparateList(root){

}

var node1 = new Node(1, null, null);
var node2 = new Node(2, null, null);
var node2 = new Node(3, null, null);
node1.
flattenToSparateList()


//v2 - flatten "in-place"
