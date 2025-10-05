import { HashSet } from "./HashSet.mjs";

const set = new HashSet();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

set.printAll();

console.log(set.has(2));
console.log(set.has(6));

set.remove(2);
console.log(set.has(2));

console.log(set.isEmpty());
set.clear();
console.log(set.isEmpty());
