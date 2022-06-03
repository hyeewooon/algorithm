/* 
Lv.2 구명보트
Greedy
2022.06.03
*/

function solution(people, limit) {
  let answer = 0;

  let sortedPeople = people.sort((a, b) => b - a);

  for (let i = 0, j = sortedPeople.length - 1; i <= j; i++) {
    if (sortedPeople[i] + sortedPeople[j] > limit) {
      answer++;
    } else {
      answer++;
      j--;
    }
  }
  return answer;
}

solution([10, 20, 30, 80, 90, 100], 100);
