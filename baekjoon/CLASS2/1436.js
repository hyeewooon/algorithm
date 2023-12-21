/*
백준 실버5
1436 영화감독 숌
브루트포스
2023.12.21
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1436.txt")
  .toString()
  .trim();

const n = Number(input);

function solution() {
  let result = 0;

  let num = n;
  let end = 665;

  while (num > 0) {
    end++;

    if (end.toString().includes("666")) {
      num--;
      result = end;
    }
  }

  console.log(result);
}

solution();
