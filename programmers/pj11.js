/* 
Lv.2 문자열 압축
2022.05.31
*/

const s = "abcabcdede";

function solution(s) {
  if (s.length === 1) return 1;
  let strings = [];

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let tempStr = "";
    let cnt = 1;
    for (let j = 0; j < s.length; j += i) {
      // substr() 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환
      let curStr = s.substr(j, i);
      let next = s.substr(j + i, i);

      if (curStr === next) {
        cnt++;
      } else {
        if (cnt > 1) {
          tempStr = tempStr + cnt + curStr;
        } else {
          tempStr = tempStr + curStr;
        }

        cnt = 1;
      }
    }

    strings.push(tempStr.length);
  }

  return Math.min(...strings);
}

solution(s);
