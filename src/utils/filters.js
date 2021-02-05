// 필터 관련 함수가 존재하는 파일

export function formatDate(value) {
  const date = new Date(value);
  const year = date.getFullYear();
  //   month는 0부터 시작해서 +1를 해줘야한다.
  let month = date.getMonth() + 1;
  //   모든 날짜 형식에 숫자가 9보다 작으면 옆에 0을 붙여준다.
  month = month > 9 ? month : `0${month}`;
  let day = date.getDate();
  day = day > 9 ? day : `0${day}`;
  let hours = date.getHours();
  hours = hours > 9 ? hours : `0${hours}`;
  let minutes = date.getMinutes();
  minutes = minutes > 9 ? minutes : `0${minutes}`;
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
