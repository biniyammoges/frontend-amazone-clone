const close = document.querySelector(".close");
const show = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

// show menu
show.addEventListener("click", () => {
  menu.style.left = "0";
});

// close menu
close.addEventListener("click", () => {
  menu.style.left = "-100%";
});
