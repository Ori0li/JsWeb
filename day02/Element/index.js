const box = document.querySelector(".box");

// const red = document.querySelector("#red");
// const blue = document.querySelector("#blue");
// const green = document.querySelector("#green");

// const square = document.querySelector("#square");
// const soft = document.querySelector("#soft");
// const hard = document.querySelector("#hard");

// const small = document.querySelector("#small");
// const medium = document.querySelector("#medium");
// const large = document.querySelector("#large");

// red.addEventListener("click", () => {
//   box.classList.remove("blue", "green");
//   box.classList.add("red");
// });

// blue.addEventListener("click", () => {
//   box.classList.remove("red", "green");
//   box.classList.add("blue");
// });

// green.addEventListener("click", () => {
//   box.classList.remove("red", "blue");
//   box.classList.add("green");
// });

// square.addEventListener("click", () => {
//   box.classList.remove("soft", "hard");
//   box.classList.add("square");
// });

// soft.addEventListener("click", () => {
//   box.classList.remove("hard", "square");
//   box.classList.add("soft");
// });

// hard.addEventListener("click", () => {
//   box.classList.remove("soft", "square");
//   box.classList.add("hard");
// });

// small.addEventListener("click", () => {
//   box.classList.remove("medium", "large");
//   box.classList.add("small");
// });

// medium.addEventListener("click", () => {
//   box.classList.remove("small", "large");
//   box.classList.add("medium");
// });

// large.addEventListener("click", () => {
//   box.classList.remove("small", "medium");
//   box.classList.add("large");
// });

const group = {
  color: ["red", "blue", "green"],
  border: ["square", "soft", "hard"],
  size: ["small", "medium", "large"],
};

for (const x in group) {
  group[x].forEach((className) => {
    document.querySelector(`#${className}`).addEventListener("click", () => {
      group[x].forEach((z) => box.classList.remove(z));
      box.classList.add(className);
    });
  });
}
