const input = document.querySelector("input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (btn.innerHTML == "😀") {
    btn.innerHTML = "😎";
    input.type = "password";
  } else {
    btn.innerHTML = "😀";
    input.type = "text";
  }
});

const inp = document.querySelector(".input");
const on = document.querySelector(".fa-eye");
const non = document.querySelector(".fa-eye-slash");

on.addEventListener("click", () => {
  on.style.display = "none";
  non.style.display = "block";
  inp.type = "password";
});

non.addEventListener("click", () => {
  on.style.display = "block";
  non.style.display = "none";
  inp.type = "type";
});
