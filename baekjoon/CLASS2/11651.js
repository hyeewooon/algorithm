/*
백준 실버5
11651 좌표 정렬하기2
정렬
2023.12.21
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "11651.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let arr = input.slice(1).map((v) => v.split(" ").map(Number));

function solution() {
  let result = "";

  const sorted = arr.sort((a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;

    if (y1 === y2) {
      return x1 - x2;
    }

    return y1 - y2;
  });

  sorted.forEach((v) => {
    result += v.join(" ") + "\n";
  });

  console.log(result);
}

solution();
