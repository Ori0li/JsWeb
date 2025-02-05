const btn = document.querySelector("#btn");

// e는 이벤트 타입 매게 변수

btn.addEventListener("click", (e) => {
  const { target } = e;
  const { innerHTML } = target;
  target.innerHTML = innerHTML == "😚" ? "😎" : "😚";
});

const input = document.querySelector("#input");

input.addEventListener("input", (e) => {
  const { target } = e;
  const str = target.value;
  console.log(str.length);
});
