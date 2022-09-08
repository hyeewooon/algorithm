/* 
Lv.3 베스트앨범
Hash
2022.09.09
*/

// function solution(genres, plays) {
//   var answer = [];

//   let musicMap = new Map();
//   let musicSumMap = new Map();
//   let genresRank = [];

//   // 같은 장르 묶기
//   for (let i = 0; i < genres.length; i++) {
//     if (!musicMap.get(genres[i])) {
//       musicMap.set(genres[i], [[i, plays[i]]]);
//       musicSumMap.set(genres[i], plays[i]);
//     } else {
//       musicMap.set(genres[i], [...musicMap.get(genres[i]), [i, plays[i]]]);
//       musicSumMap.set(genres[i], musicSumMap.get(genres[i]) + plays[i]);
//     }
//   }

//   // 장르 플레이순으로 정렬
//   for (let [key, value] of musicSumMap) {
//     genresRank.push([key, value]);
//   }

//   genresRank.sort((a, b) => {
//     const [aKey, aValue] = a;
//     const [bKey, bValue] = b;

//     return bValue - aValue;
//   });

//   // 장르별 플레이 높은 순으로 2곡씩 선별
//   for (let i = 0; i < genresRank.length; i++) {
//     const [key, value] = genresRank[i];
//     const currMusics = musicMap.get(key);

//     // 장르에 속한 곡이 하나라면 하나의 곡만 선택
//     if (currMusics.length === 1) {
//       const [firstMusicIndex, firstMusicValue] = currMusics[0];
//       answer.push(firstMusicIndex);
//       continue;
//     }

//     // sorting 후 2곡 선발
//     currMusics.sort((a, b) => {
//       const [aIndex, aValue] = a;
//       const [bIndex, bValue] = b;

//       return bValue - aValue;
//     });

//     const [firstMusicIndex, firstMusicValue] = currMusics[0];
//     const [secondMusicIndex, secondMusicValue] = currMusics[1];

//     answer.push(firstMusicIndex, secondMusicIndex);
//   }

//   return answer;
// }

function solution(genres, plays) {
  let answer = [];
  let genreMap = new Map();

  for (let idx = 0; idx < genres.length; idx++) {
    const genre = genres[idx];
    const play = plays[idx];
    const data = genreMap.get(genre) || { total: 0, songs: [] };
    genreMap.set(genre, {
      total: data.total + play,
      songs: [...data.songs, { idx, play }]
        .sort((a, b) => b.play - a.play)
        .slice(0, 2),
    });
  }

  answer = [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.idx);

  return answer;
}

solution(["classic", "pop", "classic", "classic"], [500, 600, 150, 800]);
