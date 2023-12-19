/*
백준 브론즈1
1546 평균
수학
2023.12.19
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1546.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let nums = input[1].split(" ").map(Number);

function solution() {
  let sum = 0;

  const max = Math.max(...nums);

  for (let i = 0; i < n; i++) {
    const score = nums[i];
    const upgraded = (score / max) * 100;

    sum += upgraded;
  }

  const aver = sum / n;

  console.log(aver);
}

solution();
