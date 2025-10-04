import { LinkedList } from "./LinkedList.mjs";

const list = new LinkedList();

console.log("========== Node 삽입 ==========");
list.clear();
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.printAll();

console.log("========== 마지막 위치에 Node 삽입 ==========");
list.clear();
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();

console.log("========== Node 삭제 ==========");
list.clear();
list.insertAt(0, 1);
list.deleteAt(0);
list.printAll();

list.insertAt(0, 1);
list.insertAt(1, 2);
list.insertAt(2, 3);
list.insertAt(3, 4);

list.deleteAt(2);
list.printAll();

console.log("========== 마지막 Node 삭제 ==========");
list.clear();
list.insertAt(0, 1);
list.insertAt(1, 2);
list.insertAt(2, 3);
list.insertAt(3, 4);

list.deleteLast();
list.deleteLast();

list.printAll();

console.log("========== Node 읽기 ==========");
list.clear();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

console.log(list.getNodeAt(0));
