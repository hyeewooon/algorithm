/*
백준 실버5
7568 덩치
브루트포스
2023.12.21
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "7568.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let arr = input.slice(1);

function solution() {
  let rank = Array.from({ length: n }, () => 1);
  let list = arr.map((v) => v.split(" ").map(Number));

  for (let i = 0; i < n; i++) {
    const [x, y] = list[i];

    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      const [p, q] = list[j];

      if (x > p && y > q) {
        rank[j]++;
      }
    }
  }

  console.log(rank.join(" "));
}

solution();
