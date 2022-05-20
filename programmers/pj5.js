/* 
Lv.2 가장 큰 수
정렬
2022.05.20
*/

const numbers = [6, 10];

function solution(numbers) {
  let answer = "";

  let strings = numbers.map((num) => num.toString());
  answer = strings
    .sort((a, b) => {
      let firstString = a + b;
      let secondSring = b + a;
      return secondSring - firstString;
    })
    .join("");

  answer = answer[0] ? "0" : answer;

  return answer;
}

solution(numbers);
