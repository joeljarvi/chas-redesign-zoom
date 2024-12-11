const menuBTN = document.getElementById("menuBTN");
const hiddenMenu = document.getElementById("hiddenMenu");

menuBTN.addEventListener("click", () => {
  hiddenMenu.classList.toggle("hidden");
});
