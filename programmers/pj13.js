/* 
Lv.1 숫자 문자열과 영단어
2022.06.03
*/

const s = "one4oneeight";

const wordObj = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

function solution(s) {
  var answer = s;

  for (let i = 0; i < Object.keys(wordObj).length; i++) {
    if (s.includes(wordObj[i])) {
      answer = answer.replace(new RegExp(wordObj[i], "gi"), i);
    }
  }

  return Number(answer);
}

solution(s);
