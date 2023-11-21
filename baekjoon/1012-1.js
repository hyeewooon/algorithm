/*
백준 실버2
1012 유기농 배추
(1) DFS로 풀기
2023.11.21
*/

const fs = require('fs');
const input = fs.readFileSync('1012.txt').toString().trim().split('\n');

let testCaseNum = Number(input[0]);
let nodes = input.slice(1).map((v) => v.split(' ').map(Number));

while (testCaseNum--) {
  const [n, m, k] = nodes[0];
  const list = nodes.slice(1, k + 1);

  solution(n, m, k, list);

  nodes.splice(0, k + 1);
}

function solution(n, m, k, list) {
  let count = 0;
  let board = Array.from({ length: n }, () => new Array(m).fill(0));

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  function dfs(x, y) {
    if (board[x][y] === 0) return 0;

    board[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];

      if (nextX < 0 || nextX > n - 1 || nextY < 0 || nextY > m - 1) continue;
      if (board[nextX][nextY] === 0) continue;

      dfs(nextX, nextY);
    }

    return 1;
  }

  // create board
  for (let i = 0; i < k; i++) {
    const [x, y] = list[i];

    board[x][y] = 1;
  }

  // start point
  for (let i = 0; i < k; i++) {
    const [x, y] = list[i];

    count = count + dfs(x, y);
  }

  console.log(count);
}
