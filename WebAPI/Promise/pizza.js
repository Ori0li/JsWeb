const btn = document.querySelector("#btn");
const state = document.querySelector("#state");

const chicken = document.querySelector("#chicken");
const making = document.querySelector("#making");

const orderPizza = () => {
  return new Promise((success, fail) => {
    const order = confirm("피자 주문 하실래요?");
    if (order) success("피자 주문 완료~");
    else fail("피자 주문 취소ㅠ");
  });
};

btn.addEventListener("click", () => {
  orderPizza()
    .then((s) => {
      state.innerHTML = s;
    })
    .catch((f) => {
      state.innerHTML = f;
    });
});

// const orderChicken = () => {
//   return new Promise((success, fail) => {
//     const order = confirm("치킨 주문 하실?");
//     if (order) success("치킨 주문 완");
//     else fail("주문 취소");
//   });
// };

// chicken.addEventListener("click", () => {
//   orderChicken()
//     .then((s) => {
//       making.innerHTML = s;
//     })
//     .catch((f) => {
//       making.innerHTML = f;
//     });
// });
