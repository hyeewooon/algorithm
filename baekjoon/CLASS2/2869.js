/*
백준 브론즈1
2869 달팽이는 올라가고 싶다
수학
2023.12.19
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2869.txt")
  .toString()
  .trim();

const [a, b, v] = input.split(" ").map(Number);

function solution() {
  console.log(Math.ceil((v - b) / (a - b)));
}

solution();
