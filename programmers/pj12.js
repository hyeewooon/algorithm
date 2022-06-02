/* 
Lv.2 오픈채팅방
2022.06.01
*/

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

// function solution(record) {
//   let answer = [];

//   for (let message of record) {
//     const [status, id, nickname] = message.split(" ");

//     if (status === "Enter") {
//       if (answer.some((user) => user.id === id)) {
//         const newAnswer = answer.map((user) => {
//           if (user.id === id) {
//             return {
//               ...user,
//               nickname,
//             };
//           }

//           return user;
//         });

//         answer = [...newAnswer, { id, nickname, msg: `님이 들어왔습니다.` }];
//       } else {
//         answer = [...answer, { id, nickname, msg: `님이 들어왔습니다.` }];
//       }
//     } else if (status === "Leave") {
//       const foundUser = answer.find((user) => user.id === id);
//       answer = [
//         ...answer,
//         { id, nickname: foundUser.nickname, msg: `님이 나갔습니다.` },
//       ];
//     } else if (status === "Change") {
//       answer.map((user) => {
//         if (user.id === id) {
//           user.nickname = nickname;
//         }
//       });
//     }
//   }

//   const newAnswer = answer.reduce((acc, cur, idx) => {
//     const { nickname, msg } = cur;

//     return [...acc, `${nickname}${msg}`];
//   }, []);

//   return newAnswer;
// }

function solution(record) {
  const message = {
    Enter: (name) => `${name}님이 들어왔습니다.`,
    Leave: (name) => `${name}님이 나갔습니다.`,
  };

  const userNickList = new Map();
  let messageList = [];

  for (const info of record) {
    const [status, userId, nickname] = info.split(" ");
    const userNick = userNickList.get(userId);

    if (!userNick) {
      userNickList.set(userId, nickname);
    } else if (userNick && (status === "Change" || status === "Enter")) {
      userNickList.set(userId, nickname);
    }

    if (status !== "Change") {
      messageList = [
        ...messageList,
        {
          userId,
          status,
        },
      ];
    }
  }

  const newAnswer = messageList.reduce((acc, { userId, status }) => {
    const userNick = userNickList.get(userId);

    return [...acc, message[status](userNick)];
  }, []);

  return newAnswer;
}

solution(record);
