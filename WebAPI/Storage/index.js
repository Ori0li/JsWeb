// storage(저장소)
// 저장 형태가 JSON임
// 저장할때 문자열이 가장 용량이 작이서 JSON화 시켜서 선언을 해주고 가져올때 다시 풀어줘야함

const stringifyData = JSON.stringify([
  { name: "아메리카노", price: 2500 },
  { name: "라떼", price: 3500 },
]);

// 저장하는 방법
localStorage.setItem("coffee", stringifyData);

// 불러오는 방법
const data = localStorage.getItem("coffee");
const coffeeData = JSON.parse(data);
console.log(coffeeData);
