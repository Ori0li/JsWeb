const navItem = document.querySelector("#navItem");
const tab = document.querySelector("#tab");
const tabInfo = document.querySelector("#tabInfo");
const infoBox = document.querySelector("#infoBox");

const list = [
  { id: "home", info: "Some Thing this new day!", color: "purple" },
  { id: "news", info: "Some news this new day!", color: "green" },
  { id: "contact", info: "Some contact this new day!", color: "blue" },
  { id: "about", info: "Some Thing this new day!", color: "orange" },
];

list.forEach((x) => {
  const btn = document.querySelector("#" + x.id);
  btn.addEventListener("click", () => {
    list.forEach((x) => {
      const target = document.querySelector("#" + x.id);
      target.style.backgroundColor = "#efefef";
      target.style.color = "black";
    });
    btn.style.backgroundColor = x.color;
    btn.style.color = "white";
    infoBox.style.backgroundColor = x.color;
    tab.style.color = "white";
    tabInfo.style.color = "white";
    tab.innerHTML = x.id;
    tabInfo.innerHTML = x.info;
  });
});
