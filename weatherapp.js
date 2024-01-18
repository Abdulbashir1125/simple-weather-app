let we = document.getElementById("search");
we.addEventListener("click", () => {
  document.getElementById("loading").innerHTML = "<span>loading...</span>";
  setTimeout(() => {
    document.getElementById("loading").innerHTML = "<span></span>";
  }, 3000);
  let input = document.getElementById("input").value;
  let max = "";
  let min = "";
  let desc = "";

  const url = `https://open-weather13.p.rapidapi.com/city/${input}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "80c8c3a193msh80370462ab33fecp1f15eajsn8acd618560a7",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  const char = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      console.log(result.weather[0].description);
      desc = result.weather[0].description;
      document.getElementById(
        "max"
      ).innerHTML = `Max temp: <span>${result.main.temp_max}</span> `;
      document.getElementById(
        "min"
      ).innerHTML = `Min temp <span>${result.main.temp_min}</span> `;
      document.getElementById(
        "desc"
      ).innerHTML = `Condition <span>${desc}</span> `;
    } catch (error) {
      console.error(error);
    }
  };
  char();

  // document.getElementById('max').innerHTML = a;
  // document.getElementById('min').innerHTML = a
});

// function nuc() {
//   const input = document.getElementById("input").value;
//   document.getElementById("dsply").innerText = input;
// }

// const url = "https://open-weather13.p.rapidapi.com/city/china";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "80c8c3a193msh80370462ab33fecp1f15eajsn8acd618560a7",
//     "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
//   },
// };
// const fet = fetch(url, options)
//   .then((wow) => wow.json())
//   .then((json) => json);
// console.log(fet);

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// const baba = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve("accepted");
//     } else {
//       reject("not accepted");
//     }
//   }, 3000);
// });

// baba.then((wow)=> console.log(wow)).catch((lame)=>console.log(lame)).finally((wow)=>console.log('finally'))

// const bab = async () => {
//   let em = await baba;
// };
// bab();
