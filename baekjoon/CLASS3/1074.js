/*
백준 실버1
1074 Z
재귀
2024.10.23
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1074.txt")
  .toString()
  .trim();

// 전체 배열 크기 Math.pow(2, n) * Math.pow(2, n) -> 4 * 4
const [n, r, c] = input.split(" ").map(Number);

function solution() {
  function recursion(num, row, col) {
    // 1. 2x2 배열에서의 인덱스
    if (num === 1) {
      return row * 2 + col;
    }

    // 2. 하위 배열 크기 Math.pow(2, num - 1) * Math.pow(2, num - 1) -> 2 * 2
    const size = Math.pow(2, num - 1);

    // 3. 재귀 결과 + 누적 방문 순서 합산
    if (row < size && col < size) {
      return recursion(num - 1, row, col);
    } else if (row < size && col >= size) {
      return recursion(num - 1, row, col - size) + size * size;
    } else if (row >= size && col < size) {
      return recursion(num - 1, row - size, col) + 2 * (size * size);
    } else if (row >= size && col >= size) {
      return recursion(num - 1, row - size, col - size) + 3 * (size * size);
    }
  }

  const count = recursion(n, r, c);

  console.log(count);
}

solution();
