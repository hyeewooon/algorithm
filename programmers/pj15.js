/* 
Lv.1 키패드 누르기
2022.06.03
*/

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

const keypad = {
  1: [1, 1],
  2: [1, 2],
  3: [1, 3],
  4: [2, 1],
  5: [2, 2],
  6: [2, 3],
  7: [3, 1],
  8: [3, 2],
  9: [3, 3],
  "*": [4, 1],
  0: [4, 2],
  "#": [4, 3],
};

function getDistance(arr1, arr2) {
  let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
  return result;
}

function solution(numbers, hand) {
  let answer = "";

  let nowL = [4, 1];
  let nowR = [4, 3];

  numbers.forEach((num) => {
    let numLocation = keypad[num];

    if (numLocation[1] === 1) {
      nowL = numLocation;
      answer += "L";
    } else if (numLocation[1] === 3) {
      nowR = numLocation;
      answer += "R";
    } else {
      let distanceL = getDistance(nowL, numLocation);
      let distanceR = getDistance(nowR, numLocation);
      if (distanceL === distanceR) {
        if (hand === "left") {
          nowL = numLocation;
          answer += "L";
        } else {
          nowR = numLocation;
          answer += "R";
        }
      } else if (distanceL < distanceR) {
        nowL = numLocation;
        answer += "L";
      } else {
        nowR = numLocation;
        answer += "R";
      }
    }
  });

  return answer;
}

solution(numbers, hand);
