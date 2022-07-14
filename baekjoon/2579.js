/*
백준 실버3
2579 계단 오르기
dynamic programming
2022.07.14
*/

const fs = require("fs");
const input = fs.readFileSync("2579.txt").toString().trim().split("\n");
const stairs = Number(input[0]);
const stairsArr = Array.from({ length: stairs + 1 }, (_, i) => {
  if (i === 0) {
    return 0;
  } else {
    return Number(input[i]);
  }
});

function findMaxNum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function solution() {
  let dy = Array.from({ length: stairs + 1 }, () => 0);
  dy[1] = stairsArr[1];
  dy[2] = stairsArr[1] + stairsArr[2];

  for (let i = 3; i <= stairs; i++) {
    dy[i] = findMaxNum(
      dy[i - 3] + stairsArr[i - 1] + stairsArr[i],
      dy[i - 2] + stairsArr[i]
    );
  }

  console.log(dy[stairs]);
}

solution();
