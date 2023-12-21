/*
백준 실버5
11866 요세푸스 문제 0
정렬
2023.12.21
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "11866.txt")
  .toString()
  .trim();

const [n, k] = input.split(" ").map(Number);

function solution() {
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  const newArr = [];

  while (queue.length) {
    for (let i = 0; i < k; i++) {
      const n = queue.shift();

      if (i === k - 1) {
        newArr.push(n);
      } else {
        queue.push(n);
      }
    }
  }

  console.log("<" + newArr.join(", ") + ">");
}

solution();
