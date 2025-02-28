const cnt = document.querySelector("#count");

// setTimeout(() => {
//   //setTimeout => 몇초 뒤에 문법 실행해줘
//     console.log("gd")
// }, 1000);

// const countdown = setInterval(() => {
//   cnt.innerHTML = +cnt.innerHTML == 0 ? 0 : +cnt.innerHTML - 1;
// }, 1000);

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  cnt.innerHTML = +input.value;
  const a = setInterval(() => {
    if (+cnt.innerText <= 0) {
      clearInterval(a);
    } else {
      console.log("ㄹㅇ?");
      cnt.innerText = +cnt.innerText - 1;
    }
  }, 1000);
});
