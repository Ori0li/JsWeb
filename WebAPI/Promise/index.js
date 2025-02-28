// 기본
// 참조 : Arr, Obj, func, Math, Date, Regex, Promise

//pending : 대기 중
//fulfilled : 완료

// promise 안에 함수
const alert = new Promise((success, fail) => {
  const makeAlert = () => alert("현서 화이팅");
  setTimeout(() => {
    success(makeAlert);
  }, 3000);
});

alert.then((v) => v());

// // promise 안에 일반적인거
// const bro = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("메론빵");
//   }, 3000);
// });

// // then => 성공했다면 실행하는거
// bro.then((v) => {
//   console.log(`${v} 사와`);
// });
