const fs = require("fs");
const input = fs.readFileSync("16236.txt").toString().trim().split("\n");

function solution() {
  let boardSize = Number(input[0]);
  let board = [];
  let positon = {
    x: 0,
    y: 0,
    size: 2,
    eat: 0,
    move: 0,
  };

  for (let i = 1; i < input.length; i++) {
    const row = input[i].split(" ");
    const newRow = [];

    row.forEach((value, index) => {
      if (Number(value) === 9) {
        positon = {
          ...positon,
          x: i - 1,
          y: index,
        };
      }
      newRow.push(Number(value));
    });

    board.push(newRow);
  }

  let answer = 0;
  let fish = [];

  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  const bfs = (x, y) => {
    let visited = Array.from(Array(boardSize), () =>
      Array(boardSize).fill(false)
    );
    let visitQueue = [[x, y, 0]];
    fish = [];

    while (visitQueue.length) {
      const [x, y, dist] = visitQueue.shift();

      for (let i = 0; i < 4; i++) {
        const nextX = x + dx[i];
        const nextY = y + dy[i];
        const nextDist = dist + 1;

        if (
          nextX >= 0 &&
          nextX < boardSize &&
          nextY >= 0 &&
          nextY < boardSize
        ) {
          if (!visited[nextX][nextY] && board[nextX][nextY] <= positon.size) {
            visited[nextX][nextY] = true;
            visitQueue.push([nextX, nextY, nextDist]);

            if (
              board[nextX][nextY] !== 0 &&
              board[nextX][nextY] < positon.size
            ) {
              fish.push([nextX, nextY, nextDist]);
            }
          }
        }
      }
    }
  };

  // start
  board[positon.x][positon.y] = 0;
  bfs(positon.x, positon.y);

  while (fish.length) {
    if (fish.length > 1) {
      fish.sort((a, b) => {
        const [aX, aY, aD] = a;
        const [bX, bY, bD] = b;

        if (aD < bD) {
          return -1;
        } else if (aD > bD) {
          return 1;
        } else {
          if (aX < bX) {
            return -1;
          } else if (aX > bX) {
            return 1;
          } else {
            if (aY < bY) return -1;
            else if (aY > bY) return 1;
            else return 0;
          }
        }
      });
    }

    const [x, y, d] = fish[0];

    positon = {
      ...positon,
      x,
      y,
      eat: positon.eat + 1,
    };

    board[x][y] = 0;

    if (positon.eat === positon.size) {
      positon.size++;
      positon.eat = 0;
    }

    answer = answer + d;
    fish.shift();
    bfs(x, y);
  }

  if (fish.length === 0) {
    return answer;
  }
}

console.log(solution());
