const placeholderLetters = [];
const placeholders = document.querySelectorAll(".placeholder");
placeholders.forEach((placeholder, pid) => {
  const spanList = placeholder.dataset.text.trim().split("");
  spanList.forEach((spanText) => {
    placeholder.innerHTML += `<span>${spanText}</span>`;
  });
  placeholderLetters.push([]);
  placeholder.childNodes.forEach((i, idx) => {
    if (i.nodeName === "SPAN") {
      i.style.transitionDelay = `${25 * (idx + 1)}ms`;
      placeholderLetters[pid].push(i);
    }
  });
});
const inputs = document.querySelectorAll("input");
inputs.forEach((i, idx) => {
  i.addEventListener("click", () => {
    placeholderLetters[idx].forEach(
      (i) => (i.style.transform = "translateY(-30px)")
    );
  });
  i.addEventListener("focusout", () => {
    placeholderLetters[idx].forEach(
      (i) => (i.style.transform = "translateY(0px)")
    );
  });
});
