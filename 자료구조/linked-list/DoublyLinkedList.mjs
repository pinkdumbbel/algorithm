class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  #exceptionRange(index) {
    return index < 0 || index >= this.count;
  }

  printAll() {
    let current = this.head;
    let text = "[";

    while (current !== null) {
      text += current.data;
      current = current.next;

      if (current !== null) text += ", ";
    }

    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.count) {
      throw new Error("Index out of range");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      newNode.prev = currentNode;
      newNode.next = currentNode.next;

      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if (newNode.next === null) this.tail = newNode;

    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (this.#exceptionRange(index)) {
      throw new Error("Index out of range");
    }

    let deletedNode;

    if (index === 0) {
      deletedNode = this.head;

      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (index === this.count - 1) {
      deletedNode = this.tail;

      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      deletedNode = this.head;

      for (let i = 0; i < index; i++) {
        deletedNode = deletedNode.next;
      }

      deletedNode.prev.next = deletedNode.next;
      deletedNode.next.prev = deletedNode.prev;
    }

    this.count--;
    return deletedNode;
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (this.#exceptionRange(index)) {
      throw new Error("Index out of range");
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }
}
