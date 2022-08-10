/*
백준 골드5
13023 ABCDE
DFS
2022.08.10
*/

const fs = require("fs");
const input = fs.readFileSync("13023.txt").toString().trim().split("\n");
let [v, e] = input[0].split(" ").map(Number);
const nodes = input
  .slice(1)
  .map((v) => v.split(" ").map(Number))
  .reverse();

function solution() {
  let graph = Array.from({ length: v }, () => []);
  let visited = [];
  let count = 0;
  let answer = 0;

  for (let i = 0; i < e; i++) {
    const [nodeA, nodeB] = nodes.pop();
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  const DFS = (curVertex) => {
    const vertexList = graph[curVertex];

    for (let i = 0; i < vertexList.length; i++) {
      const nextVertex = vertexList[i];

      if (visited[nextVertex] !== true) {
        visited[nextVertex] = true;
        count++;
        if (answer === 1) return 1;
        if (count === 4) {
          answer = 1;
          return;
        }
        DFS(nextVertex);
        visited[nextVertex] = 0;
        count--;
      }
    }
  };

  for (let i = 0; i < v; i++) {
    visited = Array.from({ length: v }, () => false);
    visited[i] = true;

    if (answer === 1) {
      console.log(1);
      return;
    } else if (i === v - 1) {
      console.log(0);
      return;
    }

    DFS(i);
  }
}

solution();
