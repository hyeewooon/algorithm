/* 
Lv.1 신규 아이디 추천
2022.05.30
*/

const new_id = "=.=";

function solution(new_id) {
  var answer = "";
  let strNum = new_id.length;

  // 1단계
  let changedId = new_id.toLowerCase();

  // 2단계
  changedId = changedId.replace(/[^a-z0-9-_.]/g, "");

  // 3단계
  changedId = changedId.replace(/[.]{2,}/g, ".");

  // 4단계
  if (changedId[0] === ".") {
    changedId = changedId.slice(1);
  }
  if (changedId[changedId.length - 1] === ".") {
    changedId = changedId.slice(0, -1);
  }

  // 5단계
  if (changedId === "") {
    changedId += "a";
  }

  // 6단계
  if (changedId.length >= 16) {
    changedId = changedId.slice(0, 15);

    if (changedId[14] === ".") {
      changedId = changedId.slice(0, 14);
    }
  }

  // 7단계
  if (changedId.length <= 2) {
    let lastStr = changedId[changedId.length - 1];

    while (changedId.length < 3) {
      changedId += lastStr;
    }
  }

  return changedId;
}

solution(new_id);
