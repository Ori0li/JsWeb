// fetch => promise 타입 반환 그리고 success이면 response 타입으로 return
// 피자에서는 문자열
// 서버에 요청을 하면 Response 타입을 돌려줌

const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const divList = document.querySelector("#list");

// 내가 한 거
// btn.addEventListener("click", () => {
//   const loading = (v) => {
//     return new Promise((s, f) => {
//       console.log(v);
//       divList.innerHTML = "로딩중";
//       setTimeout(() => {
//         s((divList.innerHTML = v.data.map((x) => x.title)));
//       }, 0);
//     });
//   };

//   fetch(`https://fakerapi.it/api/v2/books?_quantity=${input.value}`)
//     .then((v) => v.json())
//     .then((v) => loading(v));
// });

btn.addEventListener("click", () => {
  list.innerHTML = `<span class="loader"></span>`;

  fetch(`https://fakerapi.it/api/v2/books?_quantity=${+input.value}`)
    .then((v) => v.json())
    .then((v) => {
      list.innerHTML = "";
      v.data.forEach((book) => {
        list.insertAdjacentHTML("beforeend", `<div>${book.title}</div>`);
      });
    });
});
