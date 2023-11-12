window.onload = function () {
    const navigatonList = document.querySelector("ul");
    const burgerIcon= document.querySelector(".burger");
 

  // The transition
  burgerIcon.onclick = function () {
    navigatonList.classList.toggle("ul-active")
    burgerIcon.classList.toggle("toogle")
    
};

}
const list = document.querySelector("li")
// The animation of the burger
list.forEach((links, index) => {

});