const hanoi = (n, from, to, temp) => {
  if (n === 0) return;
  hanoi(n - 1, from, temp, to);
  console.log(`${n}이 ${from} -> ${to} 이동`);
  hanoi(n - 1, temp, to, from);
};

hanoi(3, "A", "C", "B");
