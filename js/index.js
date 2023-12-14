// Closes menu bar when scrolling for better user experience
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelector("ul");
  const burger = document.querySelector(".burger");

  window.addEventListener("scroll", function() {
    links.classList.remove("ul-active", window.scrollY > 10);
    burger.classList.remove("toogle", window.scrollY > 10);
  });
});


// Navigation bar open and close function
window.onload = function () {
    const navigatonList = document.querySelector("ul");
    const burgerIcon= document.querySelector(".burger");

    burgerIcon.onclick = function () {
    navigatonList.classList.toggle("ul-active")
    burgerIcon.classList.toggle("toogle")
};
}

// Scroll Reveal Effect (ScrollReveal Plugin is in the html)
const scrl1 = ScrollReveal({
  origin:"top",
  distance:"90px",
  duration:"2000",
  reset:true
})
const scrl2 = ScrollReveal({
  origin:"top",
  distance:"10px",
  duration:"2000",
  reset:true
})
scrl1.reveal(".text-content",{delay:100});
scrl1.reveal(".about-text",{delay:100});
scrl1.reveal(".about-img",{delay:100});
scrl1.reveal(".header",{delay:100});
scrl1.reveal(".product",{delay:100});
scrl2.reveal(".about-img",{delay:400});
scrl1.reveal(".about-us-text",{delay:100});
scrl1.reveal(".product-btn",{delay:100});
scrl2.reveal(".products-contact",{delay:100});
scrl1.reveal(".export-product",{delay:100});
scrl1.reveal(".card",{delay:100});
scrl2.reveal(".product-btn",{delay:100});
scrl2.reveal(".team-card",{delay:100});