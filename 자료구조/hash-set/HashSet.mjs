import { HashTable } from "../hash-table/HashTable.mjs";

/**
 * 1. add
 * 2. remove
 * 3. has
 * 4. claer
 * 5. isEmpty
 * 6. printAll
 */
export class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(key) {
    this.hashTable.set(key, -1);
  }

  remove(key) {
    this.hashTable.remove(key);
  }

  has(key) {
    return this.hashTable.get(key) !== null;
  }

  clear() {
    const arr = this.hashTable.arr;

    for (let i = 0; i < arr.length; i++) {
      const linkedList = arr[i];
      linkedList.clear();
    }
  }

  isEmpty() {
    const arr = this.hashTable.arr;

    for (let i = 0; i < arr.length; i++) {
      const linkedList = arr[i];
      if (linkedList.count > 0) return false;
    }

    return true;
  }

  printAll() {
    const arr = this.hashTable.arr;
    let keys = [];

    for (let i = 0; i < arr.length; i++) {
      const linkedList = arr[i];
      let currentNode = linkedList.head;

      while (currentNode !== null) {
        keys.push(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }

    console.log(`[${keys.join(", ")}]`);
  }
}
