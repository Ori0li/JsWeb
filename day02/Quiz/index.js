const creatHex = () => {
  return `#${Array(6)
    .fill(0)
    .map(() => Math.round(Math.random() * 15).toString(16))
    .join("")}`;
};
// 내가한거

// Array(10)
//   .fill(0)
//   .map(() => {
//     const button = document.createElement("button");
//     const xx = creatHex();
//     button.innerText = xx;
//     button.addEventListener("click", () => {
//       document.querySelector("#box").style.backgroundColor = xx;
//     });
//     document.body.appendChild(button);
//   });

Array(10)
  .fill(0)
  .forEach(() => {
    const button = document.createElement("button");
    const xx = creatHex();
    button.style.backgroundColor = "transparent";
    button.style.border = `2px solid ${xx}`;
    button.style.borderRadius = "20px";
    button.style.padding = "10px 20px";
    button.style.marginRight = "20px";
    button.style.color = xx;
    button.innerText = xx;
    button.addEventListener("click", () => {
      document.querySelector("#box").style.backgroundColor = xx;
    });
    document.body.appendChild(button);
  });
