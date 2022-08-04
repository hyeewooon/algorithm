/*
백준 골드4
1707 이분 그래프
BFS
2022.08.04
*/

const fs = require("fs");
const input = fs.readFileSync("1707.txt").toString().trim().split("\n");
let testCaseNum = Number(input[0]);
const nodes = input
  .slice(1)
  .map((v) => v.split(" ").map(Number))
  .reverse();

function solution() {
  while (testCaseNum--) {
    const [v, e] = nodes.pop();
    let graph = Array.from({ length: v + 1 }, () => []);
    let visited = Array.from({ length: v + 1 }, () => 0);
    let edgesNum = e;
    let answer = "YES";

    while (edgesNum--) {
      const [nodeA, nodeB] = nodes.pop();
      console.log(nodeA, nodeB);
      graph[nodeA].push(nodeB);
      graph[nodeB].push(nodeA);
    }

    function BFS(v) {
      const queue = [];
      queue.push(v);

      while (queue.length) {
        const curVertex = queue.shift();

        for (let i = 0; i < graph[curVertex].length; i++) {
          const nextVertex = graph[curVertex][i];

          if (visited[nextVertex] === 0) {
            if (visited[curVertex] === 1) {
              visited[nextVertex] = 2;
            } else {
              visited[nextVertex] = 1;
            }
            queue.push(nextVertex);
          } else if (visited[curVertex] === visited[nextVertex]) {
            answer = "NO";
            return;
          }
        }
      }
    }

    for (let i = 1; i <= v; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        BFS(i);
      }
    }

    console.log(answer);
  }
}

solution();
