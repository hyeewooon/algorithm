/* 
Lv.2 행렬 테두리 회전하기
2022.06.03
*/

function solution(rows, columns, queries) {
  var answer = [];

  let arr = Array.from(Array(rows), () => Array(columns).fill(0));

  let cnt = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = cnt;
      cnt++;
    }
  }

  for (const [x1, y1, x2, y2] of queries) {
    const queue = [];
    for (let i = y1 - 1; i < y2 - 1; i++) queue.push(arr[x1 - 1][i]);
    for (let i = x1 - 1; i < x2 - 1; i++) queue.push(arr[i][y2 - 1]);
    for (let i = y2 - 1; i > y1 - 1; i--) queue.push(arr[x2 - 1][i]);
    for (let i = x2 - 1; i > x1 - 1; i--) queue.push(arr[i][y1 - 1]);

    answer.push(Math.min(...queue));
    const temp = queue.pop();
    queue.unshift(temp);

    for (let i = y1 - 1; i < y2 - 1; i++) arr[x1 - 1][i] = queue.shift();
    for (let i = x1 - 1; i < x2 - 1; i++) arr[i][y2 - 1] = queue.shift();
    for (let i = y2 - 1; i > y1 - 1; i--) arr[x2 - 1][i] = queue.shift();
    for (let i = x2 - 1; i > x1 - 1; i--) arr[i][y1 - 1] = queue.shift();
  }

  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
