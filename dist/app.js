const openHam = document.getElementById("openHamMenu");
const closeHam = document.getElementById("closeHamMenu");
const hammenubox = document.getElementById("hammenu");

openHam.addEventListener("click", function () {
  hammenubox.style.right = "0";
});

closeHam.addEventListener("click", function () {
  hammenubox.style.right = "-100%";
});
