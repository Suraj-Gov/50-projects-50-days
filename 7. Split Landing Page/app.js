// const t = document.querySelector('a').style.
const text = document.querySelectorAll(".text");
document.querySelectorAll(".ad").forEach((i) => {
  i.addEventListener("mouseenter", () => {
    showText(i);
  });
  i.addEventListener("mouseleave", () => {
    hideText(i);
  });
});

function showText(div) {
  const i = div.classList[0] === "a" ? 0 : 1;
  text[i].style.color = "white";
  text[i].style.textShadow = "black 0px 0px 100px";
}

function hideText(div) {
  const i = div.classList[0] === "a" ? 0 : 1;
  text[i].style.color = "transparent";
  text[i].style.textShadow = "transparent 0px 0px 100px";
}
