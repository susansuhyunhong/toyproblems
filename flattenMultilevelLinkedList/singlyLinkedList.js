class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  get length() {
    return this.count;
  }

  addLast(data) {
    // Create a new Node
    const node = {
      data: data,
      next: null
    }

    if(this.count === 0) {
      // If this is the first Node, assign it to head
      this.head = node;
    } else {
      // If not the first node, link it to the last node
      this.tail.next = node;
    }

    this.tail = node;

    this.count++;
  }
}
