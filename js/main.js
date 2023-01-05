let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

const ctx = document.getElementById("myChart").getContext("2d");
const earning = document.getElementById("earning");

new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Youtube", "Amazon"],
    datasets: [
      {
        label: "Traffic Source",
        data: [1200, 1900, 3000],
        backgroundColor: ["rgba(255 , 99 , 132 , 1)", "rgba(54 , 162 , 235 , 1)", "rgba(255 , 206 , 86 ,1 )"],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

new Chart(earning, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Traffic Source",
        data: [1200, 1900, 3000, 1300, 2800, 2900, 1500, 1600, 2600, 2100, 2000, 1000],
        backgroundColor: [
          "rgba(255 , 99 , 132 , 1)",
          "rgba(54 , 162 , 235 , 1)",
          "rgba(255 , 206 , 86 ,1 )",
          "rgba(255 , 20 , 86 ,1 )",
          "rgba(250 , 206 , 86 ,1 )",
          "rgba(255 , 206 , 86 ,1 )",
          "rgba(255 , 206 , 56 ,1 )",
          "rgba(25 , 20 , 66 ,1 )",
          "rgba(225 , 106 , 16 ,1 )",
          "rgba(200 , 20 , 56 ,1 )",
          "rgba(255 , 206 , 86 ,1 )",
          "rgba(201 , 26 , 6 ,1 )",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
