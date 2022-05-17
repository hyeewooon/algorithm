/* 
Lv.2 멀쩡한 사각형
2022.05.17
*/

function greatestNum(w, h) {
  let big_num = 1;
  let small_num = 1;
  let temp = 0;

  if (w >= h) {
    big_num = w;
    small_num = h;
  } else {
    big_num = h;
    small_num = w;
  }

  while (small_num > 0) {
    temp = big_num % small_num;

    big_num = small_num;
    small_num = temp;
  }

  return big_num;
}

function solution(w, h) {
  let answer = 0;
  answer = w * h - (w + h - greatestNum(w, h));

  return answer;
}

const test = solution(8, 12);

console.log(test);

/* 
기울기를 이용한 풀이

function solution(w,h){
    const slope = h / w;
    let result = 0;

    for(let i = 1; i <= w; i++){
        result += Math.ceil(slope * i);
    }

    return ((h * w) - result) * 2;
}
*/
