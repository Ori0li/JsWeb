const makeDough = (next) => {
  console.log("도우 만들기");
  next();
};

const makeTomato = (next) => {
  console.log("토마토 소스 바르기");
  next();
};

const makeCheese = (next) => {
  console.log("치즈 뿌리기");
  next();
};

const bakePizza = (next) => {
  console.log("피자 굽기");
  next();
};

const packPizza = (next) => {
  console.log("피자 포장하기");
  next();
};

makeDough(() => {
  setTimeout(() => {
    makeTomato(() => {
      setTimeout(() => {
        makeCheese(() => {
          setTimeout(() => {
            bakePizza(() => {
              setTimeout(() => {
                packPizza(() => console.log("맛있게 묵자~"));
              }, 2000);
            });
          }, 2000);
        });
      }, 2000);
    });
  }, 2000);
});
