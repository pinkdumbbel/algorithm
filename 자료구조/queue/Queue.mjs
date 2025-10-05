import { DoublyLinkedList } from "../linked-list/DoublyLinkedList.mjs";

export class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  //[0,1,2,3,4,5]
  enqueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}
