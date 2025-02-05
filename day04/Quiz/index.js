import { elements } from "./elements.js";
import { handleInputEvent } from "./handler.js";

elements.input.addEventListener("input", (e) => handleInputEvent(e));

// input.addEventListener("input", (e) => {
//   const { target } = e;
//   const str = target.value;

//   6 <= str.length && str.length <= 20
//     ? length.style.setProperty("color", "green")
//     : length.style.setProperty("color", "gray");

//   [...str].includes(
//     "!" || "@" || "#" || "$" || "%" || "^" || "*" || "_" || "+" || "~"
//   )
//     ? char.style.setProperty("color", "green")
//     : char.style.setProperty("color", "gray");

//   6 <= str.length &&
//   str.length <= 20 &&
//   [...str].includes("!", "@", "#", "$", "%", "^", "*", "_", "+", "~")
//     ? ((btn.style.backgroundColor = "black"), (btn.style.color = "white"))
//     : ((btn.style.backgroundColor = "#e6e6e6"), (btn.style.color = "black"));
// });
