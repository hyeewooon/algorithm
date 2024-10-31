/*
백준 골드4
9019 DSLR
BFS
2024.10.31
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "9019.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const arr = input.slice(1).map((v) => v.split(" ").map(Number));

function calculator(n, cmd) {
  if (cmd === "D") {
    return (n * 2) % 10000;
  } else if (cmd === "S") {
    return n === 0 ? 9999 : n - 1;
  } else if (cmd === "L") {
    // 왼쪽으로 회전 d2, d3, d4, d1
    const str = n.toString().padStart(4, 0);
    return Number(str.slice(1) + str[0]);
  } else if (cmd === "R") {
    // 오른쪽으로 회전 d4, d1, d2, d3
    const str = n.toString().padStart(4, 0);
    return Number(str[str.length - 1] + str.slice(0, -1));
  }

  return n;
}

function solution() {
  function bfs(a, b) {
    let idx = 0;
    const queue = []; // [cur, cmds]
    const visited = Array(10000).fill(false);

    queue.push([a, ""]);
    visited[a] = true;

    while (queue.length > idx) {
      const [cur, cmds] = queue[idx++];

      if (cur === b) {
        console.log(cmds);
        return;
      }

      for (const cmd of ["D", "S", "L", "R"]) {
        const next = calculator(cur, cmd);

        if (!visited[next]) {
          queue.push([next, cmds + cmd]);
          visited[next] = true;
        }
      }
    }
  }

  for (let i = 0; i < num; i++) {
    const [a, b] = arr[i];

    bfs(a, b);
  }
}

solution();
