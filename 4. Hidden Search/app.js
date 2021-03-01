const button = document.querySelector("button");
const searchBar = document.querySelector("input");
let isSearchBarOpen = searchBar.style.width !== 0;

function toggleSearchBar() {
  isSearchBarOpen = !isSearchBarOpen;
  // isSearchBarOpen
  //   ? {
  //     searchBar.style.width = "15rem"
  //   }
  //   : {
  //     searchBar.style.width = 0
  //   };
  if (isSearchBarOpen) {
    searchBar.style.width = "15rem";
    searchBar.style.padding = "1rem";
  } else {
    searchBar.style.width = "0";
    searchBar.style.padding = "0";
  }
}

button.addEventListener("click", () => toggleSearchBar());

toggleSearchBar();
