/*
백준 실버5
1191 단어정렬
정렬
2023.12.21
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1181.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = "";
  const set = new Set(input);

  const sorted = [...set]
    .sort((a, b) => {
      if (a.length === b.length) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }
      return a.length - b.length;
    })
    .filter((v) => isNaN(Number(v)));

  sorted.forEach((v) => (result = result + v + `\n`));

  console.log(result);
}

solution();
