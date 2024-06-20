/*
백준 실버2
11724 연결 요소의 개수
BFS
2024.06.20
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "11724.txt")
  .toString()
  .trim()
  .split("\n");

const [v, e] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((v) => v.split(" ").map(Number));

function solution() {
  let count = 0;

  const graph = Array.from({ length: v + 1 }, () => []);
  const visited = new Array(v + 1).fill(false);

  for (let i = 0; i < e; i++) {
    const [x, y] = arr[i];

    graph[x].push(y);
    graph[y].push(x);
  }

  function bfs(idx) {
    const queue = [idx];

    while (queue.length > 0) {
      const vertex = queue.shift();
      const list = graph[vertex];

      for (let i = 0; i < list.length; i++) {
        const cur = list[i];

        if (!visited[cur]) {
          visited[cur] = true;
          queue.push(cur);
        }
      }
    }
  }

  for (let i = 1; i <= v; i++) {
    if (!visited[i]) {
      visited[i] = true;
      bfs(i);
      count++;
    }
  }

  console.log(count);
}

solution();
