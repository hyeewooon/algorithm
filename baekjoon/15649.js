/*
백준 실버3
15649 N과 M(1)
Backtracking
2023.10.31
*/

const fs = require('fs');
const input = fs.readFileSync('15649.txt').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

// cnt: 현재 뽑은 원소의 개수
// 뽑아야 하는 개수 m === cnt이면 종료
function solution() {
  const visited = new Array(n).fill(false);
  const selected = [];

  function dfs(cnt) {
    if (cnt === m) {
      console.log(selected.join(' '));

      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        const curVal = i + 1;

        visited[i] = true;
        selected.push(curVal);

        dfs(cnt + 1);

        selected.pop(curVal);
        visited[i] = false;
      }
    }
  }

  dfs(0);
}

solution();
