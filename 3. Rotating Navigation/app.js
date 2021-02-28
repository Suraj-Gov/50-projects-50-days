const articleContainer = document.getElementById("article-container");
const body = document.querySelector("body");
const toggleIcon = document.querySelector("svg");
const sidebarLinks = document.querySelector(".sidebar-links");

function toggleMenu() {
  articleContainer.style.transformOrigin = `0 ${window.pageYOffset}px`;
  const isRotated = articleContainer.classList.toggle("rotated");
  isRotated
    ? // to prevent scrolling when menu is open
      (body.style.overflow = "hidden")
    : setTimeout(() => {
        body.style.overflow = "visible";
        // to prevent a weird visual bug
      }, 50);
  !isRotated
    ? sidebarLinks.classList.toggle("active-sidebar-links")
    : setTimeout(() => {
        sidebarLinks.classList.toggle("active-sidebar-links");
      }, 150);
}
