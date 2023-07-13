const openHam = document.getElementById("openHamMenu");
const closeHam = document.getElementById("closeHamMenu");
const hammenubox = document.getElementById("hammenu");

openHam.addEventListener("click", function () {
  hammenubox.style.visibility = "visible";
  hammenubox.style.opacity = "1";
});

closeHam.addEventListener("click", function () {
  hammenubox.style.visibility = "hidden";
  hammenubox.style.opacity = "0";
});
