const needle = document.querySelector(".needle");
const lowerScale = document.querySelector(".lowerScale");
const root = document.querySelector(":root");
const weight = document.querySelector(".image");

const play = document.querySelector(".play");

play.addEventListener("click", () => {
  root.style.setProperty("--rotate", "rotate(21deg)");
  root.style.setProperty("--suiRotate", "rotate(-21deg)");
});
