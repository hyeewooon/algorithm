/*
백준 실버5
11650 좌표 정렬하기

2023.11.22
*/

const fs = require('fs');
const input = fs.readFileSync('11650.txt').toString().trim().split('\n');

let n = Number(input[0]);
let nodes = input.slice(1).map((v) => v.split(' ').map(Number));

function solution() {
  let result = '';

  nodes
    .sort((a, b) => {
      const [aX, aY] = a;
      const [bX, bY] = b;

      const result = aX - bX;

      if (result === 0) {
        return aY - bY;
      }

      return result;
    })
    .forEach((arr) => (result += arr.join(' ') + '\n'));

  console.log(result);
}

solution();
