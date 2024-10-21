/*
백준 골드5
7569 토마토
BFS
2024.10.20
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "7569.txt")
  .toString()
  .trim()
  .split("\n");

const [m, n, h] = input[0].split(" ").map(Number); // 가로 * 세로 * 상자 수
const arr = input.slice(1).map((v) => v.split(" ").map(Number));

function solution() {
  const graph = Array.from({ length: h }, () => []);
  const queue = []; // [x층, y열, z행, day]

  let idx = 0;
  let unriped = 0;
  let maxDay = 0;

  // 위, 아래, 앞, 뒤, 왼, 오
  const dx = [1, -1, 0, 0, 0, 0];
  const dy = [0, 0, 1, -1, 0, 0];
  const dz = [0, 0, 0, 0, 1, -1];

  // 1. 3차원 배열 생성
  for (let i = 0; i < h; i++) {
    graph[i] = [...arr.splice(0, n)];
  }

  // 2. 익은 토마토를 큐에 넣기
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (graph[i][j][k] === 1) {
          queue.push([i, j, k, 1]);
        } else if (graph[i][j][k] === 0) {
          unriped++;
        }
      }
    }
  }

  // 3. 익은 토마토 상태 업데이트
  while (queue.length > idx) {
    const [x, y, z, day] = queue[idx++];

    maxDay = day;

    for (let i = 0; i < 6; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      const nextZ = z + dz[i];

      if (nextX < 0 || nextX >= h) continue;
      if (nextY < 0 || nextY >= n) continue;
      if (nextZ < 0 || nextZ >= m) continue;

      if (graph[nextX][nextY][nextZ] === 0) {
        graph[nextX][nextY][nextZ] = 1;
        queue.push([nextX, nextY, nextZ, day + 1]);
        unriped--;
      }
    }
  }

  console.log(unriped > 0 ? -1 : maxDay - 1);
}

solution();
