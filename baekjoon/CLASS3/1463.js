/*
백준 실버3
1463 1로 만들기
DP
2024.04.22
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1463.txt")
  .toString();

let n = Number(input);

function solution() {
  const dp = Array.from({ length: n + 1 }).fill(0);

  function check(num) {
    dp[num] = dp[num - 1] + 1;

    if (num % 2 === 0) {
      dp[num] = Math.min(dp[num], dp[num / 2] + 1);
    }

    if (num % 3 === 0) {
      dp[num] = Math.min(dp[num], dp[num / 3] + 1);
    }
  }

  for (let i = 2; i <= n; i++) {
    check(i);
  }

  console.log(dp[n]);
}

solution();
