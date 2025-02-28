const clock = document.querySelector("#clock");

const setClock = () => {
  const date = new Date().toLocaleTimeString();
  clock.innerHTML = date;
};

setInterval(setClock, 1000);
