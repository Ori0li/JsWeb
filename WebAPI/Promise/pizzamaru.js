const makeDough = () => {
  return new Promise((s, f) => {
    console.log("도우 피는 중");
    setTimeout(() => {
      s("도우 다 만듬");
    }, 2000);
  });
};

const makeTomato = () => {
  return new Promise((s, f) => {
    console.log("토마토 바르기");
    setTimeout(() => {
      s("토마토 다 바름");
    }, 2000);
  });
};

const makeCheese = () => {
  return new Promise((s, f) => {
    console.log("치즈 뿌리기");
    setTimeout(() => {
      s("치즈 다 뿌림");
    }, 2000);
  });
};

const bakePizza = () => {
  return new Promise((s, f) => {
    console.log("화덕 들어감");
    setTimeout(() => {
      s("피자 완성");
    }, 2000);
  });
};

const packPizza = () => {
  return new Promise((s, f) => {
    console.log("피자 박스 만드는중");
    setTimeout(() => {
      s("피자 포장 완료");
    }, 2000);
  });
};

makeDough()
  .then((v) => {
    console.log(v);
    return makeTomato();
  })
  .then((v) => {
    console.log(v);
    return makeCheese();
  })
  .then((v) => {
    console.log(v);
    return bakePizza();
  })
  .then((v) => {
    console.log(v);
    return packPizza();
  })
  .then((v) => {
    console.log(v);
    return console.log("맛나게 묵자");
  });
