const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");
const countryList = document.querySelector("#countryList");

const countries = [
  { capital: "london", nation: "England" },
  { capital: "paris", nation: "France" },
  { capital: "tokyo", nation: "Japan" },
  { capital: "seoul", nation: "Seoul" },
  { capital: "new Delhi", nation: "India" },
  { capital: "beijing", nation: "China" },
  { capital: "canberra", nation: "Australia" },
];

countries.forEach((v) => {
  const upperCase = v.capital.charAt(0).toUpperCase() + v.capital.slice(1);
  const li = document.createElement("li");
  li.innerHTML = upperCase;
  li.addEventListener("click", () => {
    capital.innerHTML = upperCase;
    desc.innerHTML = `${upperCase} is the capital of city ${v.nation}`;
  });
  countryList.appendChild(li);
});
