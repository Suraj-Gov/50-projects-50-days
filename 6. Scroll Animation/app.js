const objectsDiv = document.querySelector(".objects");
const object = document.createElement("div");
object.classList.add("object");

for (let _ = 0; _ < 50; _++) {
  const objectGroup = document.createElement("div");
  objectGroup.classList.add("object-group");
  for (let i = 0; i < 2; i++) {
    const objectCopy = object;
    switch (i) {
      case 0:
        objectCopy.classList.add("left");
        objectCopy.textContent = "Left";
        break;
      case 1:
        objectCopy.classList.add("right");
        objectCopy.textContent = "Right";
        break;
    }
    objectGroup.innerHTML += objectCopy.outerHTML;
    objectCopy.classList = "object";
  }
  objectsDiv.innerHTML += objectGroup.outerHTML;
}

window.addEventListener("scroll", () => updateOnScroll());

const objects = document.querySelectorAll(".object");

function updateOnScroll() {
  const bottomTrigger = (window.innerHeight / 5) * 4;
  objects.forEach((object) => {
    const objectTop = object.getBoundingClientRect().top;
    if (objectTop < bottomTrigger) {
      object.classList.add("show");
    } else object.classList.remove("show");
  });
}

updateOnScroll();
