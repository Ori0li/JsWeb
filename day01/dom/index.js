const h1 = document.createElement("h1");
h1.innerText = "고기싸룽 어서오고";
h1.style.color = "red";
document.body.appendChild(h1);

const meats = [
  "삼겹살",
  "목살",
  "돼지갈비",
  "양념갈비",
  "항정살",
  "갈매기살",
  "꼬들살",
  "냉삼",
  "뽈살",
  "돼지껍데기",
];
meats.forEach((x, i) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = i % 2 ? "skyblue" : "yellow";
  btn.innerText = `${i + 1}번째 ` + x;
  btn.addEventListener("click", () => {
    alert(x);
  });
  document.body.appendChild(btn);
});
// 삼겹살, 목살, 돼지갈비, 양념갈비, 항정살, 갈매기살. 꼬들살, 냉삼, 뽈살, 돼지껍데기
