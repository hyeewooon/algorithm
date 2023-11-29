/*
백준 실버4
2751 수 정렬하기2
정렬
2023.11.29
*/

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '2751.txt')
  .toString()
  .trim()
  .split('\n');

let n = Number(input[0]);
let arr = input.slice(1).map(Number);

function solution() {
  let result = '';

  const sortedArr = arr.sort((a, b) => a - b);

  sortedArr.forEach((v) => {
    result += v + '\n';
  });

  console.log(result);
}

solution();
