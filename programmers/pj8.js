/* 
Lv.2 H-Index
정렬
2022.05.24

논문 n편 중, h번 이상 인용된 논문이 h편 이상
*/

const citations = [0, 1, 2];

function solution(citations) {
  let answer = 0;

  for (let i = 0; i <= citations.length; i++) {
    let cnt = 0;

    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) {
        cnt++;
      }
    }

    if (cnt >= i) {
      answer = i;
    }
  }

  return answer;
}

solution(citations);
