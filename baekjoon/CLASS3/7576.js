/*
백준 골드5
7576 토마토
BFS
2024.10.21
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "7576.txt")
  .toString()
  .trim()
  .split("\n");

const [m, n] = input[0].split(" ").map(Number); // 가로 * 세로
const arr = input.slice(1).map((v) => v.split(" ").map(Number));

function solution() {
  const graph = [...arr];
  const queue = []; // [x열, y행, day]

  let idx = 0;
  let unriped = 0;
  let maxDay = 0;

  // 왼, 오, 앞, 뒤
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  // 1. 익은 토마토 찾아서 queue에 넣기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        queue.push([i, j, 1]);
      } else if (graph[i][j] === 0) {
        unriped++;
      }
    }
  }

  // 2. 익은 토마토를 graph 배열에 방문 표시
  while (queue.length > idx) {
    const [x, y, day] = queue[idx++];

    maxDay = day;

    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];

      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;

      if (graph[nextX][nextY] === 0) {
        graph[nextX][nextY] = 1;
        queue.push([nextX, nextY, day + 1]);

        unriped--;
      }
    }
  }

  console.log(unriped > 0 ? -1 : maxDay - 1);
}

solution();
