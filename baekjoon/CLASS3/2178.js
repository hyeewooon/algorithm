/*
백준 실버1
2178 미로 탐색
너비우선탐색(BFS) -> 최단 경로 탐색을 위해
2024.10.22
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2178.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((v) => v.split("").map(Number));

function solution() {
  let idx = 0;

  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const queue = []; // 큐에 저장할 정보: [x, y, count]

  // 위, 아래, 왼, 오
  const dx = [-1, 1, 0, 0]; // 열
  const dy = [0, 0, -1, 1]; // 행

  // 1. 첫 방문 표시
  visited[0][0] = 1;
  queue.push([0, 0, 1]);

  // 2. 인접한 곳을 확인하고 큐에 넣는다.
  while (queue.length > idx) {
    const [x, y, count] = queue[idx++];

    // 3. 도착점에 도달했는지 확인
    if (x === n - 1 && y === m - 1) {
      console.log(count);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];

      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;

      if (graph[nextX][nextY] === 1 && visited[nextX][nextY] === 0) {
        visited[nextX][nextY] = 1;
        queue.push([nextX, nextY, count + 1]);
      }
    }
  }
}

solution();
