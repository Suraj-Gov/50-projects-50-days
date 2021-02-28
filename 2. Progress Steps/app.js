const nodes = document.querySelectorAll(".node");
const bars = document.querySelectorAll(".bar");
const prevButton = document.querySelector(
  ".progress-buttons button:nth-child(1)"
);
const nextButton = document.querySelector(
  ".progress-buttons button:nth-child(2)"
);

let counter = 1;

function increment() {
  counter < nodes.length && counter >= 0 && counter++;
  update();
}

function decrement() {
  counter <= nodes.length && counter > 1 && counter--;
  update();
}

function updateNodes() {
  for (let i = 0; i < counter; i++) {
    nodes[i].classList.add("active-node");
  }
  for (let i = counter; i < nodes.length; i++) {
    nodes[i].classList.remove("active-node");
  }
}

function updateBars() {
  for (let i = 0; i < counter - 1; i++) {
    bars[i].classList.add("active-bar");
  }
  for (let i = counter - 1; i < bars.length; i++) {
    bars[i].classList.remove("active-bar");
  }
}

function disableButtons() {
  if (counter === 1) {
    prevButton.disabled = true;
  } else if (counter === nodes.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}

function update() {
  updateNodes();
  updateBars();
  disableButtons();
}

update();

// function test() {
//   setInterval(() => {
//     increment();
//   }, 100);
// }

// test();
