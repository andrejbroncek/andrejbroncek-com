var myInterval = null;
const colorChangeInterval = 40;

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

function titleRandomColor() {
  document.getElementById("title").style.color = randomColor();
}

function titleDefaultColor() {
  document.getElementById("title").style.color = "#fff";
}

document.querySelector("#title").addEventListener("mouseenter", (event) => {
  myInterval = setInterval(titleRandomColor, colorChangeInterval);
});

document.querySelector("#title").addEventListener("mouseleave", (event) => {
  clearInterval(myInterval);
  titleDefaultColor();
});
