navigator.geolocation.getCurrentPosition((v) => {
  const { longitude, latitude } = v.coords;
  const apikey = "5888abe3b1f8d5a33f1b9c3dbc538594";

  const weatherImg = {
    Snow: "snow.png",
    Rain: "rain.png",
    Cloudy: "cloudy.png",
    Haze: "Haze.png",
    Sun: "sun.png",
  };

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
  )
    .then((response) => response.json())
    .then((v) => {
      const currentWeather = v.weather[0].main;

      document.body.insertAdjacentHTML(
        "beforeend",
        `<img src=${weatherImg[currentWeather]}>`
      );
    });
});
