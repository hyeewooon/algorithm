/*
백준 실버5
1676 팩토리얼 0의 개수
수학
2023.12.21
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1676.txt")
  .toString()
  .trim();

const n = Number(input);

function solution() {
  const result = Math.floor(n / 5) + Math.floor(n / 25) + Math.floor(n / 125);

  console.log(result);
}

solution();
