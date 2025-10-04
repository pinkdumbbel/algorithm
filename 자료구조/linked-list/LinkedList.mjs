class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  #exceptionRage(index) {
    return index < 0 || index > this.count;
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
    this.count = 0;
  }

  insertAt(index, data) {
    if (this.#exceptionRage(index)) {
      throw new Error("Index out of range");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (this.#exceptionRage(index)) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      const deletedNode = this.head;
      this.head = deletedNode.next;
      this.count--;

      return deletedNode;
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      const deletedNode = current.next;
      current.next = deletedNode.next;
      this.count--;

      return deletedNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (this.#exceptionRage(index)) {
      throw new Error("Index out of range");
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }
}

export { LinkedList };
