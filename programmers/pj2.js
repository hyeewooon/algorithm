/* 
Lv.1 로또의 최고 순위와 최저 순위
2022.05.14
*/

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
  let result = [6, 6];
  let min_cnt = 0;
  let max_cnt = 0;
  const rankObj = {
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
  };

  for (let i of lottos) {
    if (win_nums.includes(i)) {
      min_cnt++;
    }

    if (i === 0) {
      max_cnt++;
    }
  }

  if (min_cnt >= 2) {
    const rank = Object.values(rankObj).indexOf(min_cnt) + 1;
    result = [rank, rank];
  }

  if (max_cnt > 0) {
    const sum_cnt = min_cnt + max_cnt;
    const max_rank = Object.values(rankObj).indexOf(sum_cnt) + 1;
    result = [max_rank, result[1]];
  }
}

solution(lottos, win_nums);
