import { DoublyLinkedList } from "../linked-list/DoublyLinkedList.mjs";

/**
 * 1. printAll
 * 2. addFirst
 * 3. removeFirst
 * 4. addLast
 * 5. removeLast
 * 6. isEmpty
 */
export class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  addFirst(data) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    this.list.deleteAt(0);
  }

  addLast(data) {
    this.list.insertLast(data);
  }

  removeLast() {
    this.list.deleteLast();
  }

  isEmpty() {
    return this.list.count === 0;
  }
}
