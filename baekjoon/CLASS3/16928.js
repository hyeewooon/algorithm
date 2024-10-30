/*
백준 골드5
16928 뱀과 사다리 게임
BFS
2024.10.30
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "16928.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number); // 사다리, 뱀
const ladders = input.slice(1, n + 1).map((v) => v.split(" ").map(Number));
const snakes = input.slice(n + 1).map((v) => v.split(" ").map(Number));

const board = Array.from({ length: 101 }, (_, i) => i);

for (const [x, y] of ladders) {
  board[x] = y;
}

for (const [x, y] of snakes) {
  board[x] = y;
}

function solution() {
  let idx = 0;

  const queue = []; // [현재 칸, 주사위 굴린 횟수]
  const visited = Array.from({ length: 101 }, () => 0);

  queue.push([1, 0]);
  visited[1] = 1;

  while (queue.length > idx) {
    const [current, count] = queue[idx++];

    if (current === 100) {
      console.log(count);
      return;
    }

    for (let k = 1; k <= 6; k++) {
      const next = current + k;

      if (next > 100) continue;

      const nextPos = board[next];

      if (visited[nextPos] === 0) {
        visited[nextPos] = 1;
        queue.push([nextPos, count + 1]);
      }
    }
  }
}

solution();
