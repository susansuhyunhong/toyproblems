
class LinkedListNode{
  constructor(key, data){
    this.data = data;
    this.next = null;
    this.prev = null;
    this.key = key;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert_at_head(key, data) {
    newNode = this.LinkedListNode(key, data);
    if (!this.head) {
      this.tail = newnode;
      this.head = newNode;
    } else {
      newNode.next = head;
      this.head.previous = newNode;
      this.head = newNode;
    }

    this.size++;

    return newNode;
  }

  insert_at_tail(key, value) {
    newNode = this.LinkedListNode(key, data);
    this.insert_at_tail(newNode);
    return newNode;
  }

  insert_at_tail(node) {
    if (!this.tail) {
      this.tail = node;
      this.head = node;
      node.next = null;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      node.next = null;
    }

    this.size++;
    return node;
  }

  remove(node) {
    if (!node) {
      return;
    }

    if (node.prev != null) {
      node.prev.next = node.next;
    }

    if (node.next != null) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.size--;
    return node;
  }

  remove_head() {
    return this.remove(this.head);
  }

  remove_tail() {
    return this.remove(this.tail);
  }

}

class LRUCache {

  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.cache_vals = new LinkedList();
  }
  set(key, value) {
    if (this.cache[key]) {
      let node = this.cache[key];
      node.data = value;
      this.cache_vals.remove(node);
      this.cache_vals.insert_at_tail(node);
    } else {
      this.evict_if_needed();
      let node = new LinkedListNode(key, value);
      this.cache_vals.insert_at_tail(node);
      this.cache[key] = node;
    }
  }

  get(key) {
    if (this.cache[key]) {
      let node = this.cache[key];
      this.cache_vals.remove(node);
      this.cache_vals.insert_at_tail(node);
      return node.data;
    } else {
      return -1;
    }
  }

  evict_if_needed() {
    if (this.cache_vals.size >= this.capacity) {
      node = this.cache_vals.remove_head();
      this.cache.remove(node);
    }
  }

  printcache() {
    let node = this.cache_vals.head;
    while (node) {
      console.log(node.key + " " + node.data + ", ");
      node = node.next;
    }
  }
}
