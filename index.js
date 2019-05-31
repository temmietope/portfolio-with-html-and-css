const showNav = document.querySelector("#show-nav");
const list = document.querySelector("#list");
const navBar = document.querySelector("#nav-bar");

console.log(showNav)
showNav.addEventListener('click', ()=>{
    // showNav.style.display = 'none';
    console.log("clicked");
    list.style.display = 'block';
})