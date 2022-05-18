/* 
Lv.2 기능 개발
스택/큐
2022.05.18
*/

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  let answer = [];

  let finDays = [];

  for (let i = 0; i < progresses.length; i++) {
    const finDay = Math.ceil((100 - progresses[i]) / speeds[i]);
    finDays.push(finDay);
  }

  let cnt = 0;
  let maxDay = finDays[0];
  for (let i = 0; i < finDays.length; i++) {
    if (maxDay >= finDays[i]) {
      cnt++;
    } else {
      maxDay = finDays[i];
      answer.push(cnt);
      cnt = 1;
    }

    if (i === finDays.length - 1) {
      answer.push(cnt);
    }
  }

  return answer;
}

solution(progresses, speeds);
