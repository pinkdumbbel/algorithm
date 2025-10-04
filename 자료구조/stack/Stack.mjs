import { LinkedList } from "../linked-list/LinkedList.mjs";

/**
 * 1. push
 * 2. pop
 * 3. peek
 * 4. isEmpty
 */
export class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch {
      return null;
    }
  }

  peek() {
    return this.list.head;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}
