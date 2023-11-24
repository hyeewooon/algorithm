/*
백준 실버3
1929 소수구하기
에라토스테네스의 체
2023.11.24
*/

const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '1929.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const [N, M] = input;

function solution() {
  const result = [];

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  for (let i = N; i <= M; i++) {
    if (i === 1) continue;

    if (isPrime(i)) {
      result.push(i);
    }
  }

  console.log(result.join('\n'));
}

/** 에라토스테네스의 체: 2부터 n까지 자신을 제외한 배수를 제거하면 소수만 남게 됨. */
function solution2() {
  const result = [];
  const prime = new Array(M + 1).fill(true);

  for (let i = 2; i <= Math.sqrt(M); i++) {
    if (!prime[i]) continue;
    for (let j = i ** 2; j <= M; j += i) {
      prime[j] = false;
    }
  }

  for (let i = N; i <= M; i++) {
    if (i === 1) continue;

    if (prime[i]) {
      result.push(i);
    }
  }

  console.log(result.join('\n'));
}

solution2();
