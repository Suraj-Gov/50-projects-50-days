let currentExpanded = document.querySelector(".img-container-expanded");
let currentVisible = document.querySelector(".visible-text");
document.querySelectorAll(".img-container").forEach((i) => {
  i.addEventListener("click", () => {
    currentExpanded.classList.remove(["img-container-expanded"]);
    currentVisible.classList.remove(["visible-text"]);
    i.classList.add(["img-container-expanded"]);
    currentExpanded = i;
    i.addEventListener("transitionend", () => {
      const visibleText = document.querySelector(
        ".img-container-expanded > h3"
      );
      visibleText.classList.add(["visible-text"]);
      currentVisible = visibleText;
    });
  });
});
