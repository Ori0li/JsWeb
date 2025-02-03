const right = document.querySelector("rightArrow");
const left = document.querySelector("leftArrow");

const pageNum = Array(50)
  .fill(0)
  .map((x, i) => i + 1);

pageNum.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  btn.addEventListener("click", () => {
    btn.classList.remove("skyblue");
    if (btn.classList.contains("skyblue")) {
    } else {
      btn.classList.add("skyblue");
    }
  });
  document.body.appendChild(btn);
});
