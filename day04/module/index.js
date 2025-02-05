import { makeCard, makeCard1 } from "./components/card.js";

const cardBox = document.querySelector("#cardBox");

const data = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "어딜까요",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "어딜까요",
  },
];

// data.forEach((v) => {
//   const card = makeCard(v.imgSrc, v.title);
//   cardBox.appendChild(card);
// });

data.forEach((v) => {
  cardBox.insertAdjacentHTML("beforeend", makeCard1(v.imgSrc, v.title));
});
