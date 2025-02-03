const btn = document.querySelector("#clickBtn");
const dropList = document.querySelector("#dropDownList");

btn.addEventListener("click", () => {
  if (dropList.classList.contains("show")) {
    dropList.classList.remove("show");
  } else {
    dropList.classList.add("show");
  }
});
