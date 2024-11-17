/**
 * 다른 풀이 (GPT)
 * 1. 갈색카펫과 노란카펫을 더해 전체 격자수를 구한다
 * 2. 높이는 최소 3부터 시작 (노란색이 둘러 쌓이려면 맨 위/아래는 모두 갈색 이여야 하기 때문)
 * 3. 가로/세로가 가능한 모든 경우의 수는 전체 격자수의 약수이다. ex. 모든 격자수가 12인 경우 [1,12], [2,6], [3,4]...
 * 4. 3번의 이유로 약수 만큼만 구하면 되기 때문에 전체격자수의 제곱근 까지만 순회
 * 5. 전체 격자 수 = 가로 * 세로 이므로 전체 격자수/세로 = 가로 가 된다.
 * 6. 카펫은 항상 갈색이 노란색을 한겹 둘러쌓은 형태가 되기 때문에 노란색 영역을 구하기 위해서는 가로 - 2 , 세로 - 2 를 해준 후 곱한다.
 * 7. 6번의 결과로 나온 값이 input의 노란색과 같으면 [가로, 세로]를 리턴한다.
 */

function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height !== 0) continue;

    const width = total / height;
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
  return [];
}
