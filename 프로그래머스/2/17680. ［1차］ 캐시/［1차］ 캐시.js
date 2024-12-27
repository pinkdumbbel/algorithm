function solution(cacheSize, cities) {
  var answer = 0;
  const caches = [];

  cities.forEach((city) => {
    const c = city.toLowerCase();
    const idx = caches.indexOf(c);

    if (idx >= 0) {
      answer += 1;
      caches.splice(idx, 1);
    } else {
      answer += 5;
    }

    caches.unshift(c);

    if (caches.length > cacheSize) {
      caches.pop();
    }
  });

  return answer;
}
