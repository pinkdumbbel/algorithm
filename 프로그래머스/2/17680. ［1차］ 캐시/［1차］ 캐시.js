function solution(cacheSize, cities) {
  let answer = 0;
  cities = cities.map((city) => city.toLowerCase());
  let map = new Map();

  cities.forEach((city) => {
    if (map.get(city)) {
      map.delete(city);
      answer += 1;
    } else {
      answer += 5;
    }

    map.set(city, true);

    if (map.size > cacheSize) {
      const oldKey = map.keys().next().value;
      map.delete(oldKey);
    }
  });

  return answer;
}