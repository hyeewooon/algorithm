let id_list = ["muzi", "frodo", "apeach", "neo"]; // 이용자 아이디
// 2 <= id_list <= 1000
// 1 <= id 길이 <= 10, 소문자, 중복 노

let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
]; //각각 신고한 이용자의 아이디들
//muzi frodo
let k = 2; // 2번 이상 신고 당하면 정지.

// 한번에 한명의 유저 신고
// 동일 유저 신고는 1회만
// k번 이상 신고된 유저는 정지, 메일로 발송
// 단 마지막에 한꺼번에 취합해서 정지 메일 발송
// 각 유저별 처리 결과 메일 횟수

function solution(id_list, report, k) {
  let answer = [];
  let new_Report = [];
  let stop_guys = [];

  let user_report = id_list.reduce(
    (o, key) =>
      Object.assign(o, {
        [key]: {
          bad: [],
          me: 0,
          stop: false,
        },
      }),
    {}
  );

  // report.map((item, index) => {
  //   new_Report = [...new_Report, item.split(" ")];
  // });

  console.log(user_report);
  console.log(new_Report);

  // for (const reportInfo of report) {
  //   const [reporter, encounter] = reportInfo.split(" ");
  //   const reporterInfo = user_report[reporter];
  //   const encounterInfo = user_report[encounter];

  //   if (reporterInfo.bad.includes(encounter)) {
  //     return;
  //   }

  //   reporterInfo.bad = [...reporterInfo.bad, encounter];
  //   encounterInfo.me++;

  //   if (encounterInfo.me >= 2) {
  //     encounterInfo.stop = true;
  //   }
  // }

  report.map((item, index) => {
    const [reporter, encounter] = item.split(" ");
    // const reportName = item[reporter];
    // const encounterName = item[encounter];

    const reportInfo = user_report[reporter];
    const encounterInfo = user_report[encounter];

    if (reportInfo.bad.includes(encounter)) return;

    reportInfo.bad = [...reportInfo.bad, encounter];
    encounterInfo.me++;

    if (encounterInfo.me >= 2) {
      encounterInfo.stop = true;
    }

    // if (!user_report[item[0]].bad.includes(item[1])) {
    //   user_report[item[0]] = {
    //     ...user_report[item[0]],
    //     bad: [...user_report[item[0]].bad, item[1]],
    //   };

    //   user_report[item[1]] = {
    //     ...user_report[item[1]],
    //     me: user_report[item[1]].me + 1
    //   };

    //   user_report[item[1]] = {
    //     ...user_report[item[1]],
    //     stop: user_report[item[1]].me >= 2,
    //   };
    // }
  });

  console.log(user_report);

  id_list.map((item, index) => {
    let temp_num = 0;

    user_report[item].bad.some((userName) => {
      const stop_guy = user_report[userName];

      if (stop_guy.stop) {
        temp_num = temp_num + 1;
      }
    });

    answer = [...answer, temp_num];
  });

  console.log(answer);

  // id_list.map((item, index) => {
  //   let temp_num = 0;
  //   user_report[item].bad.some((elem) => {
  //     if (stop_guys.includes(elem)) {
  //       temp_num = temp_num + 1;
  //     }
  //   });

  //   answer = [...answer, temp_num];
  // });

  return answer;
}

solution(id_list, report, 2);
