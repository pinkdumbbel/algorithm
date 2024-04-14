function solution(n) {
        const answer = Array.from(Array(n), () => Array(n).fill(null));
        let rowIdx = 0,
          colIdx = 0,
          searchLength = n - 1,
          cnt = 1;

        while (cnt <= n * n) {
          if (rowIdx === (n - 1) / 2 && colIdx === (n - 1) / 2) {
            answer[rowIdx][colIdx] = cnt++;
          }
          
          for (let j = 0; j < searchLength; j++) {
            answer[rowIdx][colIdx] = cnt++;
            colIdx++;
          }

          for (let j = 0; j < searchLength; j++) {
            answer[rowIdx][colIdx] = cnt++;
            rowIdx++;
          }

          for (let j = 0; j < searchLength; j++) {
            answer[rowIdx][colIdx] = cnt++;
            colIdx--;
          }

          for (let j = 0; j < searchLength; j++) {
            answer[rowIdx][colIdx] = cnt++;
            rowIdx--;
          };
          
          searchLength -= 2;
          colIdx++;
          rowIdx++;
        }

        return answer;
      }