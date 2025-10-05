import { DoublyLinkedList } from "../linked-list/DoublyLinkedList.mjs";

class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

/**
 * 1. set
 * 2. get
 * 3. remove
 */
export class HashTable {
  constructor() {
    this.arr = [];

    for (let i = 0; i < 10; i++) {
      this.arr.push(new DoublyLinkedList());
    }
  }

  #hashFn(n) {
    return n % 10;
  }

  set(key, value) {
    const idx = this.#hashFn(key);
    const currentLinkedList = this.arr[idx];

    currentLinkedList.insertAt(0, new HashData(key, value));
  }

  get(key) {
    const idx = this.#hashFn(key);
    let currentNode = this.arr[idx].head;

    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  remove(key) {
    const list = this.arr[this.#hashFn(key)];
    let currentNode = list.head;
    let deletedIndex = 0;

    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return list.deleteAt(deletedIndex);
      }

      currentNode = currentNode.next;
      deletedIndex++;
    }

    return null;
  }
}
