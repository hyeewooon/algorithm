/*
백준 실버4
2839 설탕배달
그리디
2023.11.23
*/

const fs = require('fs');
const input = fs.readFileSync('2839.txt').toString().trim();
const n = Number(input);

function solution(n) {
  let count = 0;

  while (n > 0) {
    if (n % 5 === 0) {
      n -= 5;
    } else {
      n -= 3;
    }
    count++;
  }

  if (n < 0) count = -1;

  console.log(count);
}

solution(n);
