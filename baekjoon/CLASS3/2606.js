/*
백준 실버3
2606 바이러스
DFS
2024.04.22
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2606.txt")
  .toString()
  .trim()
  .split("\n");

let v = Number(input[0]);
let e = Number(input[1]);
const arr = input.slice(2).map((v) => v.split(" ").map(Number));

function solution() {
  let count = 0;

  const graph = Array.from({ length: v + 1 }, () => []);
  const visited = new Array(v + 1).fill(false);

  for (let i = 0; i < e; i++) {
    const [x, y] = arr[i];

    graph[x].push(y);
    graph[y].push(x);
  }

  function dfs(vertex) {
    const list = graph[vertex];

    for (let i = 0; i < list.length; i++) {
      const y = list[i];

      if (!visited[y]) {
        visited[y] = true;
        count++;
        dfs(y);
      }
    }
  }

  visited[1] = true;
  dfs(1);

  console.log(count);
}

solution();
