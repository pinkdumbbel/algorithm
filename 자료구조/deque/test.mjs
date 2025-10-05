import { Deque } from "./Deque.mjs";

const log = console.log;

const deque = new Deque();

log(deque.isEmpty());
deque.addFirst(1);
deque.printAll();
deque.addFirst(2);
deque.printAll();
deque.addFirst(3);
deque.printAll();
deque.addFirst(4);
deque.printAll();
deque.addFirst(5);
deque.printAll();
log(deque.isEmpty());

log("\n");
log(deque.isEmpty());
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
log(deque.isEmpty());

log("\n");
log(deque.isEmpty());
deque.addLast(1);
deque.printAll();
deque.addLast(2);
deque.printAll();
deque.addLast(3);
deque.printAll();
deque.addLast(4);
deque.printAll();
deque.addLast(5);
deque.printAll();
log(deque.isEmpty());

log("\n");

log(deque.isEmpty());
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
log(deque.isEmpty());
