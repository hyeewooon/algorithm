/*
백준 실버5
10814 나이순 정렬
정렬
2023.12.21
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "10814.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let arr = input.slice(1);

function solution() {
  const sorted = arr.sort((a, b) => {
    const [ageA, _] = a.split(" ");
    const [ageB, _b] = b.split(" ");

    return Number(ageA) - Number(ageB);
  });

  console.log(sorted.join("\n"));
}

solution();
