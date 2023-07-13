const openHam = document.getElementById("openHamMenu");
const closeHam = document.getElementById("closeHamMenu");
const hammenubox = document.getElementById("hammenu");

openHam.addEventListener("click", function () {
  hammenubox.style.visibility = "visible";
  hammenubox.style.opacity = "1";
  document.body.style.overflow = "hidden";
});

closeHam.addEventListener("click", function () {
  hammenubox.style.visibility = "hidden";
  hammenubox.style.opacity = "0";
  document.body.style.overflow = "auto";
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: "false",
});
