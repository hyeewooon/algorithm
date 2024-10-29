/*
백준 골드5
10026 적록색약
DFS
2024.10.28
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "10026.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((v) => v.split(""));

function solution() {
  let count = 0;
  let countForRG = 0;

  const visited = Array.from({ length: n }, () => new Array(n).fill(0));
  const visitedForRG = Array.from({ length: n }, () => new Array(n).fill(0));

  // 상 하 좌 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(x, y, color, visited, isRGCheck) {
    visited[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];

      if (nextX < 0 || nextX >= n) continue;
      if (nextY < 0 || nextY >= n) continue;
      if (visited[nextX][nextY] === 1) continue;

      const isSameColor = arr[nextX][nextY] === color;
      const isRG =
        (arr[nextX][nextY] === "R" && color === "G") ||
        (arr[nextX][nextY] === "G" && color === "R");

      if (isSameColor || (isRGCheck && isRG)) {
        visited[nextX][nextY] = 1;
        dfs(nextX, nextY, color, visited, isRGCheck);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const color = arr[i][j];

      if (visited[i][j] === 0) {
        count++;
        dfs(i, j, color, visited, false);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const color = arr[i][j];

      if (visitedForRG[i][j] === 0) {
        countForRG++;
        dfs(i, j, color, visitedForRG, true);
      }
    }
  }

  console.log(`${count} ${countForRG}`);
}

solution();
