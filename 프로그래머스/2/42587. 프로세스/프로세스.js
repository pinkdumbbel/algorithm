//[1, 1, 9, 1, 1, 1]
//우선순위별 나열하기위해 내림차순 정렬
//포인터만 움직이면서 우선순위 비교
function solution(priorities, location) {
  let answer = 0;

  const sorted = [...priorities].sort((a, b) => b - a);
  let pt = (mpt = 0);

  while (mpt < priorities.length) {
    const p = priorities[pt];

    if (p === sorted[mpt]) {
      answer++;
      mpt++;

      if (pt === location) return answer;
    }

    pt = pt == priorities.length - 1 ? 0 : pt + 1;
  }

  return answer;
}
