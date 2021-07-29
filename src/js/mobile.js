const $doc = (el) => document.querySelector(el);
// closing and open nav-left
const closeMenuButton = $doc("#close-menu");
const navLeft = $doc(".nav-left");
const burguerButton = $doc("#burguer-button");

closeMenuButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(navLeft.classList.toString().includes("nav-left-enabled")) {
        navLeft.classList.remove("nav-left-enabled");
        navLeft.classList.remove("container");
        navLeft.classList.add("nav-left");
    }

});

burguerButton.addEventListener("click", e => {
    e.preventDefault();
    if(!navLeft.classList.toString().includes("nav-left-enabled")) {
        navLeft.classList.remove("nav-left");
        navLeft.classList.add("nav-left-enabled");
        navLeft.classList.add("container");
    }
})