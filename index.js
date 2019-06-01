const showNav = document.querySelector("#show-nav");
const list = document.querySelector("#list");
const navBar = document.querySelector("#nav-bar");
// const uli = document.querySelector("ul");

console.log(showNav);
showNav.addEventListener("click", () => {
  console.log("clicked");
  if (list.style.display == "block") {
    list.style.display = "none";
    console.log("block");
  } else {
    list.style.display = "block";
  }
});
