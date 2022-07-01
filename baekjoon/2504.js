/*
백준 실버1 
2504 괄호의 값
2022.07.01
*/

const fs = require("fs");
const input = fs.readFileSync("2504.txt").toString().trim();

let stack = [];

function parseBracket(bracket) {
  const lastStackItem = stack.pop();
  const bracketPair = bracket === ")" ? "(" : "[";

  // 짝이 맞는 경우
  if (lastStackItem === bracketPair) {
    stack.push(bracketPair === "(" ? 2 : 3);
    return true;
  }

  // 내부에 다른 괄호가 더 있는 경우
  if (typeof lastStackItem === "number") {
    let sum = lastStackItem;
    while (stack.length) {
      const stackNum = stack.pop();
      if (stackNum === bracketPair) {
        stack.push((bracketPair === "(" ? 2 : 3) * sum);
        return true;
      } else if (typeof stackNum === "number") {
        sum = sum + stackNum;
        continue;
      } else {
        return false;
      }
    }
  }

  return false;
}

outer: for (let i = 0; i < input.length; i++) {
  if (input[i] === `(` || input[i] === `[`) {
    stack.push(input[i]);
  } else {
    if (!parseBracket(input[i])) {
      console.log(0);
      break outer;
    }
  }

  // 모든 연산이 끝나고
  // stack의 모든 숫자 더하기
  // stack에 숫자외의 기호가 있으면 잘못된 값이므로 0 return
  if (i === input.length - 1) {
    if (stack.length > 0 && !stack.find((e) => typeof e === "string"))
      console.log(stack.reduce((acc, curr) => acc + curr));
    else {
      console.log(0);
    }
  }
}
