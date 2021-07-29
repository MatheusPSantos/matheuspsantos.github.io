const $doc = (el) => document.querySelector(el);
// closing and open nav-left
const closeMenuButton = $doc("#close-menu");
const navLeft = $doc(".nav-left");

closeMenuButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(!navLeft.classList.toString().includes("nav-left-disabled")) {
        navLeft.classList.remove("nav-left");
        navLeft.classList.remove("container");
        navLeft.classList.add("nav-left-disabled");
        navLeft.classList.add("container");
    }

});