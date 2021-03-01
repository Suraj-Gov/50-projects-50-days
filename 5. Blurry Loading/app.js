let root = document.querySelector(":root");
const body = document.querySelector("body");
const loaderText = document.querySelector("p");
const loader = document.querySelector(".loader");

let val = 1;
// first the val will be 1

function addVal() {
  setTimeout(() => {
    val = val * 1.04;
    // need to make a equation for ease-in-out
    checkVal();
  }, 25);
  // this will add some val to the val, then check if the val is > 100
}

function checkVal() {
  if (val <= 100) {
    addVal();
  } else val = 100;
  root.style.setProperty("--blur-val", `${10 - val / 10}px`);
  root.style.setProperty("--opacity-val", `${(100 - val) * 0.01}`);
  loaderText.textContent = `${parseInt(val)}%`;
  // if the val is <= 100, keep continuing, else set the val to 100
}

addVal();
// then we start adding val to the val
