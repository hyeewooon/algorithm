/*
백준 브론즈1
1259 팰린드롬수
문자열
2023.12.19
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1259.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  for (let i = 0; i < input.length - 1; i++) {
    const str = input[i];

    const first = str.slice(0, Math.floor(str.length / 2));
    const second = str.substring(Math.ceil(str.length / 2));

    if (first === reverseString(second)) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}

solution();
