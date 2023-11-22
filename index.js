document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelector("ul");
  const burger = document.querySelector(".burger");

  window.addEventListener("scroll", function() {
    links.classList.remove("ul-active", window.scrollY > 10);
    burger.classList.remove("toogle", window.scrollY > 10);
  });
});


window.onload = function () {
    const navigatonList = document.querySelector("ul");
    const burgerIcon= document.querySelector(".burger");
 

  // Transition
  burgerIcon.onclick = function () {
    navigatonList.classList.toggle("ul-active")
    burgerIcon.classList.toggle("toogle")
    
};

}
const list = document.querySelector("li")
// Burger animation
list.forEach((links, index) => {

});