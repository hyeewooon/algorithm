/*
백준 브론즈1
11050 이항계수1
수학
2023.12.19
*/

// 주어진 집합 n에서 원하는 개수k만큼 순서없이 뽑는 조합의 개수
// n개 중 k를 선택하는 조합의 수

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "11050.txt")
  .toString()
  .trim();

const [n, k] = input.split(" ").map(Number);

function solution() {
  function factorial(n) {
    let multiple = 1;
    for (let i = 1; i <= n; i++) {
      multiple *= i;
    }

    return multiple;
  }

  const result = factorial(n) / (factorial(n - k) * factorial(k));

  console.log(result);
}

solution();
