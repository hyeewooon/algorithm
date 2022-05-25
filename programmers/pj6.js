/* 
Lv.1 완주하지 못한 선수
해시
2022.05.24
*/

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  let answer = "";

  const newList = completion.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] = acc[cur] + 1;
    } else {
      acc[cur] = 1;
    }

    return acc;
  }, {});

  participant.find((partee) => {
    if (newList[partee]) {
      newList[partee] -= 1;
    } else {
      answer = partee;
    }
  });

  return answer;
}

solution(participant, completion);
