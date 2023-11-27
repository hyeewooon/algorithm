/*
백준 실버2
1654 랜선자르기
이분탐색
2023.11.27
*/
const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '1654.txt')
  .toString()
  .trim()
  .split('\n');

let [k, n] = input[0].split(' ').map(Number);
let lines = input.slice(1).map(Number);

function solution() {
  let min = 1;
  let max = Math.max(...lines);

  while (max >= min) {
    let count = 0;
    let mid = Math.floor((min + max) / 2);

    for (let i = 0; i < k; i++) {
      const line = lines[i];

      if (line >= mid) {
        const num = Math.floor(line / mid);
        count += num;
      }
    }

    if (count < n) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  console.log(max);
}

solution();
