/*
백준 골드5
5430 AC
정렬
2024.06.20
*/

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "5430.txt")
  .toString()
  .trim()
  .split("\n");

const testCaseNum = Number(input[0]);
const commands = input.slice(1);

function solution() {
  for (let i = 0; i < testCaseNum; i++) {
    const [action, _total, arr] = commands.splice(0, 3);
    const words = action.split("");
    const list = JSON.parse(arr);

    let isReversed = false;
    let isError = false;

    function deleteElem() {
      if (isReversed) {
        list.pop();
      } else {
        list.shift();
      }
    }

    for2: for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (word === "R") {
        isReversed = !isReversed;
      } else if (word === "D") {
        if (list.length <= 0) {
          isError = true;
          break for2;
        }

        deleteElem();
      }
    }

    const answer = isReversed ? list.reverse() : list;

    console.log(isError ? "error" : JSON.stringify(answer));
  }
}

solution();
