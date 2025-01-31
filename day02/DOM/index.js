// const red = .querySelector(".red");
// red.addEventListener("click", () => alert("빨강빨강"));

// const blue = document.querySelector(".blue");
// blue.addEventListener("click", () => alert("파랑파랑"));

// const green = document.querySelector(".green");
// green.addEventListener("click", () => alert("초록초록"));

const box = document.querySelector(".box");

[(".red", ".blue", ".green")].forEach((v) =>
  document.querySelector(v).addEventListener("click", () => {
    box.style.backgroundColor = `${v.split(".")[1]}`;
  })
);

// document.querySelector(".square").addEventListener("click", () => {
//   document.querySelector(".box").style.borderRadius = "0px";
// });

// document.querySelector(".soft").addEventListener("click", () => {
//   document.querySelector(".box").style.borderRadius = "20px";
// });

// document.querySelector(".hard").addEventListener("click", () => {
//   document.querySelector(".box").style.borderRadius = "9999px";
// });

const radius = [".square", ".soft", ".hard"];
radius.forEach((v) =>
  document.querySelector(v).addEventListener("click", () => {
    if (v == ".square") box.style.borderRadius = "0px";
    else if (v == ".soft") box.style.borderRadius = "20px";
    else if (v == ".hard") box.style.borderRadius = "9999px";
  })
);

// document.querySelector(".small").addEventListener("click", () => {
//   document.querySelector(".box").style.width = "100px";
//   document.querySelector(".box").style.height = "100px";
// });

// document.querySelector(".medium").addEventListener("click", () => {
//   document.querySelector(".box").style.width = "200px";
//   document.querySelector(".box").style.height = "200px";
// });

// document.querySelector(".large").addEventListener("click", () => {
//   document.querySelector(".box").style.width = "300px";
//   document.querySelector(".box").style.height = "300px";
// });

const size = [".small", ".medium", ".large"];
size.forEach((v) =>
  document.querySelector(v).addEventListener("click", () => {
    if (v == ".small") {
      box.style.width = "100px";
      box.style.height = "100px";
    } else if (v == ".medium") {
      box.style.width = "200px";
      box.style.height = "200px";
    } else if (v == ".large") {
      box.style.width = "300px";
      box.style.height = "300px";
    }
  })
);
